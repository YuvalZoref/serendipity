import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/about.scss'
import Crescent from '../assets/about/crescent.png'
import Cloggs from '../assets/about/cloggs2.jpg'
import fullCircle from '../assets/about/fullCircle.jpg'

export default function About() {
  return (
    <div className='container'>
      <Navbar />
      <div id='about'>
      <section className='aboutUs'>
        <h1 className='aboutUsTitle'>Serendipity Creative Writers</h1>
        <h3 className='aboutUsSubtitle'>Who are we?</h3>
        <p className='aboutUsDescription'>
        Serendipity Creative Writers Group Charity
        (Reg. No. 1201197)
        Serendipity has been a founded organisation since 2018, reaching charitable status in December 2022.
        Serendipity was founded by Sonia Zoref as a result of years of struggling dealing with her own mental health journey and finally finding the cathartic and therapeutic outcomes of working through various mediums of the Arts, in particular, Creative Writing and Mindfulness.
        Serendipity Creative Writing and Mindful Workshops are held across Kirklees and the broader West Yorkshire area. They are two-hour workshops that are leader & service user led, are FREE and include free refreshments including CAKE. We operate an open-door policy and also receive referrals from the NHS and other Organisations.
        Our workshops are informal and fun. There is no experience of writing necessary and in fact, you don’t even have to write, you can doodle, watch, listen or talk. The emphasis being on building better stronger communities/friendships and participating in something special. The Facilitator provides generic writing exercises that usual last ten minutes, then we offer the opportunity for members to read their work if they so wish to. Quite often this results in small discussions. Its good to talk, good to share, and the only rule we have is that there are no rules. As long as we all respect each other, all positive feedback is welcomed.
        All our workshops are in local Community Café’s because we know that it is important for people to feel safe and welcome in normalised settings.
        Mental Health, like physical health is on a spectrum, and we work to reduce the stigma often attached. Everyone one of us, at some time or other suffer with our mental health; from severe mental health illness’ to poverty or loneliness. Serendipity is all about feel good. Everyone (16 years +) from all backgrounds and all experiences are welcome to join us. We also welcome immigrants and refugees). In fact, we embrace our differences and share our stories with one another in an informal yet educational environment that helps reduce misunderstanding, racism and hate crime.
        There is also an opportunity to learn new skills. Our workshops are relaxed and creative, we never put pressure on anyone regarding punctuation, spelling and grammar. We want everyone to feel relaxed and happy. Through the therapeutic art of creative writing, many of our members find the confidence to get back in to work or education, or even just getting back in to society.
        We published an Anthology ‘The Serendipity Handthology’ two years ago, and we are currently working on our next book, and there is opportunity for everyone to be involved.
        Serendipity work with school term times, but we hold Natter Groups during the school holiday (these are free sessions but a pay-for-your-own refreshments meeting)
        </p>
      </section>

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
