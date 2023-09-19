import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/about.scss'
import SerenPic from '../assets/about/seren-pic.jpg'
import Sonia from '../assets/about/sonia.jpg'
import Amanda from '../assets/about/amanda.jpg'
import Kathy from '../assets/about/kathy.png'
import Martyn from '../assets/about/martyn.png'
import Mira from '../assets/about/mira.png'
import Philip from '../assets/about/philip.jpg'

export default function About() {
  return (
    <div className='container'>
      <Navbar />
      <div id='about'>
      <section className='aboutUs'>
        <h1 className='aboutUsTitle'>Serendipity Creative Writers</h1>
        <img src={SerenPic} alt='serendipity book cover' className='aboutSerenPic' />
        <h3 className='aboutUsSubtitle'>Who we are</h3>
        <p className='aboutUsDescription'>
        <span className='aboutTextTop'>Serendipity Creative Writers Group Charity
        (Reg. No. 1201197)</span><br/>
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
      <section className='ourStaff'>
        <h1 className='staffTitle'>Our Staff</h1>
        <div className="staffImages">
          <div className='imgItem'>
            <img src={Sonia} alt='Sonia' className="staffImage" />
            <h2 className='staffName'>Sonia Zoref</h2>
            <h2 className='staffJob'>Founder/Facilitator/Administrator</h2>
          </div>
          <div className='imgItem'>
            <img src={Amanda} alt='Amanda' className="staffImage" />
            <h2 className='staffName'>Amanda Rhodes</h2>
            <h2 className='staffJob'>Secretary/Trustee</h2>
          </div>
          <div className='imgItem'>
            <img src={Kathy} alt='Kathy' className="staffImage" />
            <h2 className='staffName'>Kathy Trout</h2>
            <h2 className='staffJob'>Chairperson/Trustee</h2>
          </div>
          <div className='imgItem'>
            <img src={Martyn} alt='Martyn' className="staffImage" />
            <h2 className='staffName'>Martyn Haymonds</h2>
            <h2 className='staffJob'>Volunteer</h2>
          </div>
          <div className='imgItem'>
            <img src={Mira} alt='Mira' className="staffImage" />
            <h2 className='staffName'>Mira Fadel</h2>
            <h2 className='staffJob'>Trustee</h2>
          </div>
          <div className='imgItem'>
            <img src={Philip} alt='Philip' className="staffImage" />
            <h2 className='staffName'>Philip Walton</h2>
            <h2 className='staffJob'>Volunteer</h2>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
}
