import Divider from '@mui/material/Divider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { products } from './productdata';
import './slide.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = () => {
    return (
        <div className='products_section'>
            <div className='products_deal'>
                <h3>Deal of the Day</h3>

                <button className="view_btn">View All</button>
            </div>

            <Divider />

            <Carousel responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                showDots={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {products.map((product) => (
                    <div className="products_items">
                        <div className="product_img">
                            <img src={product.url} alt="productitem" />

                            <p className="products_name">{product.title.shortTitle}</p>

                            <p className='products_offer'>{product.discount}</p>

                            <p className="products_explore">{product.tagline}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Slide
