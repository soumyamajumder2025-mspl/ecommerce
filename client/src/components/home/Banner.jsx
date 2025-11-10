import React, { useState, useEffect, useCallback } from 'react';
import './home.css';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import useEmblaCarousel from 'embla-carousel-react';

const Banner = () => {
    const data = [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    // Auto slide change every 5 seconds
    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000);
        
        return () => clearInterval(interval);
    }, [emblaApi]);

    return (
        <Box className='carousel-container'>
            {/* Left arrow */}
            <IconButton 
                className="carousel-arrow carousel-arrow-left"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
            >
                <ChevronLeft />
            </IconButton>
            
            {/* Carousel viewport */}
            <Box className="embla" ref={emblaRef}>
                <Box className="embla__container">
                    {data.map((item, index) => (
                        <Box 
                            key={index} 
                            className="embla__slide"
                        >
                            <Box 
                                component="img" 
                                src={item} 
                                alt={`Banner ${index + 1}`} 
                                className='banner-slide'
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            
            {/* Right arrow */}
            <IconButton 
                className="carousel-arrow carousel-arrow-right"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
            >
                <ChevronRight />
            </IconButton>
            
            {/* Dots indicator */}
            <Box className="carousel-dots">
                {data.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`carousel-dot ${index === selectedIndex ? 'active' : ''}`}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Banner;