import { Link } from 'react-router-dom';
import '../pages/styling/home.scss'

export default function Home() {
  return (
    <div className='home'>
      <h2>Home page</h2>
      <button>
        <Link activeClass='active' to='About'>
          Click here to see more!
        </Link>
      </button>
    </div>
  )
}
