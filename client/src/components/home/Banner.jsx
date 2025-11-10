import React from 'react';
import './home.css';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Banner = () => {
    const data = [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ];

    // Simple carousel state using component state
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <Box className='carousel-container' position="relative" width="100%" height="280px">
            {/* Left arrow */}
            <IconButton 
                className="carousel-arrow carousel-arrow-left"
                onClick={goToPrevious}
                sx={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }
                }}
            >
                <ChevronLeft />
            </IconButton>
            
            {/* Banner image */}
            <Box 
                className='banner-slide'
                component="img" 
                src={data[currentIndex]} 
                alt={`Banner ${currentIndex + 1}`} 
                sx={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                }}
            />
            
            {/* Right arrow */}
            <IconButton 
                className="carousel-arrow carousel-arrow-right"
                onClick={goToNext}
                sx={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }
                }}
            >
                <ChevronRight />
            </IconButton>
            
            {/* Dots indicator */}
            <Box 
                className="carousel-dots"
                sx={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    zIndex: 10
                }}
            >
                {data.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => goToSlide(index)}
                        sx={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Banner;