import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/contact.scss'

export default function Contact() {
  return (
    <div className='container'>
      <Navbar />
        <div className='contact'>
          <h2>Contact page</h2>
        </div>
      <Footer />
    </div>
  )
}
