import Banner from './Banner'
import './home.css'
import Slide from './Slide'


const Main = () => {
  return (
    <div className='home_section'>
      <div className="banner_part">
        <Banner />
      </div>

      <Slide />
    </div>
  )
}

export default Main
