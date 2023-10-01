// import React, { myRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/contact.scss'
import emailjs from '@emailjs/browser'
import facebookIcon from '../assets/contact/facebook.png'
import linkedInIcon from '../assets/contact/linkedin.png'
import instagramIcon from '../assets/contact/instagram.png'

export default function Contact() {
  // const form = myRef;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jszi7wu', 'template_9uicapg', '.contactForm', 'BO1InNRzxnajdYbua')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Thanks for submitting your message!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='container'>
      <Navbar />
        <div id='contact'>
          <h1 className='contactTitle'>Contact Us</h1>
          <span className='contactDescriptionphone'>+447751254609</span>
          <span className='contactDescription'>Feel free to fill out the form below to reach out to us!</span>
          <form className='contactForm' onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name' />
            <input type='email' className='email' placeholder='Your Email' name='from_email' />
            <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
          </form>
          <section className="socialLinks">
            <a href="https://www.facebook.com/serendipitycreativewriters/" rel="noreferrer" target="blank"><img src={facebookIcon} alt="facebook" className="link" /></a>
            <a href="/" rel="noreferrer" target="blank"><img src={linkedInIcon} alt="linkedIn" className="link" /></a>
            <a href="/" rel="noreferrer" target="blank"><img src={instagramIcon} alt="instagram" className="link" /></a>
          </section>
        </div>
      <Footer />
    </div>
  )
}
