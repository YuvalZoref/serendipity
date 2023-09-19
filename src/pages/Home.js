import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'
import Seren from '../assets/home/serendipity2.png'

export default function Home() {
  return (
    <div id='home'>
      <div className='homeItems'>
          <Link activeClass='active' to='About' className='homeBtnLink'>
          <img src={Seren} alt='' className='homeTitlePic'/>
          </Link>
          <p className='homePoem'>
            " There are many stories<br />
            Hidden in the branches<br />
            From those who cried out<br />
            And only the trees<br />
            Were listening "
          </p>
      </div>
    </div>
  )
}
