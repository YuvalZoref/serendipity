import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <button>
        <Link activeClass='active' to='About'>
          Click here to see more!
        </Link>
      </button>
    </div>
  )
}
