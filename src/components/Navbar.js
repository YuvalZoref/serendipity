import { Link } from 'react-router-dom';
import '../components/styling/navbar.scss'


export default function Navbar() {
  return (
    <div className="navbar">
      <h1>This will be my Navbar</h1>
          <button>
          <Link to='../About'>
            Click here to see about!
          </Link>
        </button>
        <button>
          <Link to='../Blog'>
            Click here to see blog!
          </Link>
        </button>
        <button>
          <Link to='../Contact'>
            Click here to see contact!
          </Link>
        </button>
        <button>
          <Link to='../'>
            Click here to see the sexy homepage!
          </Link>
        </button>
    </div>
  )
}
