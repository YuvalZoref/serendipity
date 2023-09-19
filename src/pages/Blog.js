import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/blog.scss'
import Crescent from '../assets/blog/crescent.png'
import Cloggs from '../assets/blog/cloggs2.jpg'
import fullCircle from '../assets/blog/fullCircle.jpg'

export default function Blog() {
  return (
    <div className='container'>
      <Navbar />
        <div id='blog'>
        <section className='locations'>
        <h1 className='locationsTitle'>Our classes</h1>
        <p className='locationsDescription'>Check out our weekly classes and where we hold them</p>

        <div className="row">
          <div className="classLocation">
            <img src={Crescent} alt='crescent'/>
            <div className="layer">
              <h3>The Crescent</h3>
              <p>Tuesday in Batley 2PM – 4PM</p>
            </div>
          </div>
          <div className="classLocation">
            <img src={Cloggs} alt='cloggs'/>
            <div className="layer">
              <h3>Cloggs Cafe</h3>
              <p>Weds in Dewsbury 2:30PM – 4:30PM</p>
            </div>
          </div>
          <div className="classLocation">
            <img src={fullCircle} alt='fullCircle'/>
            <div className="layer">
              <h3>Full circle Cafe</h3>
              <p>Friday in Huddersfield 2PM – 4PM</p>
            </div>
          </div>
        </div>
      </section>
        </div>
      <Footer />
    </div>
  )
}
