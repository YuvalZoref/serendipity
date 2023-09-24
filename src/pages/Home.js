import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'
import serenPic from '../assets/about/seren-pic.jpg'

export default function Home() {
  return (
    <div id='home'>
      <div className='homeContainer'>
        <div className='homeItemsLeft'>
          <p className='homeText'>Welcome to Serendipity</p>
          <h2 className='homeTitle'>"Promoting good mental health and wellbeing through the arts"</h2>
          <p className='homePoem'>
            " There are many stories
            Hidden in the branches<br />
            From those who cried out
            And only the trees<br />
            Were listening "
          </p>
      <Link activeClass='active' to='About' className='homeBtnLink'>
        Click here to see more
      </Link>
        </div>
        <div className='homeItemsRight'>
          <img src={serenPic} alt='serenPic' className='landingPic' />
        </div>
      </div>
    </div>
  )
}
