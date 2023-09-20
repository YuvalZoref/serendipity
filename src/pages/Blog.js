import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/blog.scss'
import Crescent from '../assets/blog/crescent.png'
import Cloggs from '../assets/blog/cloggs2.jpg'
import fullCircle from '../assets/blog/fullCircle.jpg'
import certificate1 from '../assets/blog/certificate1.jpg'
import certificate2 from '../assets/blog/certificate2.jpg'
import certificate3 from '../assets/blog/certificate3.jpg'

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
      <section className='funders'>
        <h1 className='fundersTitle'>Funders & Partnerships</h1>
          <ul className='fundersList'>
            <li className='fundersListItem'>Community Plus</li>
            <li className='fundersListItem'>One Community</li>
            <li className='fundersListItem'>The National Lottery</li>
            <li className='fundersListItem'>Arnold Clark</li>
            <li className='fundersListItem'>The Jimmy Dickinson Foundation</li>
            <li className='fundersListItem'>The Mayors Safer Communities</li>
            <li className='fundersListItem'>The Cheshire Community Foundation</li>
            <li className='fundersListItem'>Locala</li>
            <li className='fundersListItem'>Magic Little Grants</li>
            <li className='fundersListItem'>Comic Relief</li>
            <li className='fundersListItem'>The West Yorkshire Health & Care Partnership</li>
            <li className='fundersListItem'>The Jo Cox Foundation</li>
            <li className='fundersListItem'>The Full Circle Café, Huddersfield</li>
            <li className='fundersListItem'>Hive Community Café, Huddersfield</li>
            <li className='fundersListItem'>The Crescent CIC, Batley</li>
            <li className='fundersListItem'>Cloggs Community Café, Dewsbury</li>
            <li className='fundersListItem'>Ability Options</li>
            <li className='fundersListItem'>Huddersfield Literature Festival</li>
            <li className='fundersListItem'>The University of Huddersfield</li>
            <li className='fundersListItem'>Marsden Poets</li>
            <li className='fundersListItem'>Batley Poets</li>
            <li className='fundersListItem'>The Albert Poets</li>
            <li className='fundersListItem'>Kirklees Council</li>
            <li className='fundersListItem'>Kirklees Libraries</li>
            <li className='fundersListItem'>St. John Ambulance</li>
            <li className='fundersListItem'>NHS</li>
            <li className='fundersListItem'>Folly Hall Mental Health Services, Huddersfield</li>
            <li className='fundersListItem'>Platform 1</li>
          </ul>
        </section>
        <section className='certificates'>
        <div className="certificatesRow">
          <div className="certificate">
            <img src={certificate1} alt='certificate'/>
          </div>
          <div className="certificate">
            <img src={certificate2} alt='certificate'/>
          </div>
          <div className="certificate">
            <img src={certificate3} alt='certificate'/>
          </div>
        </div>
      </section>
        </div>
      <Footer />
    </div>
  )
}
