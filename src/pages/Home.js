import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'
import books from '../assets/home/books.jpg'

export default function Home() {
  return (
    <div id='home'>
        <div className='homeItemsLeft'>
          <p className='homeText'>Welcome to <span className='homeTextWord'>Serendipity</span></p>
          <h2 className='homeTitle'>"Promoting good mental health and wellbeing through the arts"</h2>
          {/* <p className='homePoem'>
            " There are many stories
            Hidden in the branches<br />
            From those who cried out
            And only the trees<br />
            Were listening "
          </p> */}
      <Link activeClass='active' to='About' className='homeBtnLink'>
        <div className='btnText'>Click here to enter</div>
      </Link>
        </div>
        <div className='homeItemsRight'>
          <img src={books} alt='books' className='landingPic' />
        </div>
    </div>
  )
}
