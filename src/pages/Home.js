import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'

export default function Home() {
  return (
    <div id='home'>
      <div className='homeItems'>
        <h1 className='homeTitle'>Serendipity</h1>
          <Link activeClass='active' to='About' className='homeBtnLink'>
            Click here to see more!
          </Link>
      </div>
    </div>
  )
}
