import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'
import Seren from '../assets/home/serendipity2.png'

export default function Home() {
  return (
    <div id='home'>
      <Link activeClass='active' to='About' className='homeBtnLink'>
        <div className='homeItems'>
          <img src={Seren} alt='' className='homeTitlePic'/>
          <p className='homePoem'>
            " There are many stories<br />
            Hidden in the branches<br />
            From those who cried out<br />
            And only the trees<br />
            Were listening "
          </p>
        </div>
      </Link>
    </div>
  )
}
