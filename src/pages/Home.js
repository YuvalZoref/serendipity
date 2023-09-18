import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'
import Seren from '../assets/serendipity2.png'

export default function Home() {
  return (
    <div id='home'>
      <div className='homeItems'>
          <Link activeClass='active' to='About' className='homeBtnLink'>
          <img src={Seren} alt='' className='homeTitlePic' />
          </Link>
      </div>
    </div>
  )
}
