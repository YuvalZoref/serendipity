import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="header">
      <h1>This will be my header baby!</h1>
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
