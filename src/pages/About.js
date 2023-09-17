import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/about.scss'

export default function About() {
  return (
    <div className='container'>
      <Navbar />
      <div id='about'>
        <h2>
          Welcome to Serendipity creative writers, this will be a fantastic landing page!
        </h2>
      </div>
      <Footer />
    </div>
  )
}
