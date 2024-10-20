import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/jobs.scss'

export default function Jobs() {
  return (
    <div className='container'>
      <Navbar />
        <div id='jobs'>
          <section className='jobsSection'>
          <br></br>
          <br></br>
          <div className='jobTitle'>PROJECT MANAGER</div>
          <br></br>
          <br></br>
            <div className='jobDescription'>
            - We are pleased to announce our new successfully appointed Project Manager and first Serendipity staff member Sonia Zoref
            who was appointed in September 2024.
            "I am so happy after 6 years facilitating Serendipity to have been offered the role of Project Manager,
            funded by the National Lottery. I am looking forward to growing Serendipity as a Charity and getting involved
            in lots of new project opportunities. Our aim is to reach as many people in a many areas as possible making Serendipity
            The Write Way to Better Mental Health, for all." Sonia
            </div>
          </section>
        </div>
      <Footer />
    </div>
  )
}
