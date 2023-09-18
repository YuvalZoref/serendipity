import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'
import Seren from '../assets/serendipity.png'

export default function Home() {
  return (
    <div id='home'>
      <div className='homeItems'>
        <img src={Seren} alt='' className='homeTitlePic' />
          <Link activeClass='active' to='About' className='homeBtnLink'>
            Click here to enter
          </Link>
      </div>
    </div>
  )
}
