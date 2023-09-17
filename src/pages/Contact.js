import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/contact.scss'

export default function Contact() {
  return (
    <div className='container'>
      <Navbar />
        <div id='contact'>
          <h1 className='contactTitle'>Contact Me</h1>
          <span className='contactDescription'>Feel free to fill out the form below if you are interested</span>
          <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name' />
            <input type='email' className='email' placeholder='Your Email' />
            <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
          </form>
        </div>
      <Footer />
    </div>
  )
}
