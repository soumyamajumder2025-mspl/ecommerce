import './home.css'
import Carousel from 'react-material-ui-carousel'

const Banner = () => {
    const data = [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ];

    return (
        <Carousel className='carasousel'>
            {data.map((item, i) => (
                <img key={i} src={item} alt={`Banner ${i + 1}`} className='banner_img' />
            ))}

        </Carousel>
    )
}

export default Banner
