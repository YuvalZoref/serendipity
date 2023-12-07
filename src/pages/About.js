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
import Martin from '../assets/about/Martin.jpg'
import Tia from '../assets/about/tia.jpg'
import Paws from '../assets/about/paws.png'

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
            <div className='imgItemSection'>
              <h2 className='staffName'>Sonia Zoref</h2>
              <h2 className='staffJob'>Founder/Facilitator/Administrator</h2>
              <p className='staffDescription'>
                Sonia has an English Literature with Creative Writing Degree that she gained as a mature student,
                holding down a part time job and raising 3 children. Sonia has facilitated creative writing workshops with Serendipity for almost 5 years.
                Prior to that she delivered community creative writing workshops within educational settings; schools and colleges.
                Sonia has training in counselling and has worked with mental health organisations as a freelance writer.
                Sonia was commissioned to publish a collection of her poems relating to mental health and was the feature poet in the University of Huddersfield’s anthology. Sonia embraces all Art forms.
                She is currently working on her 2nd poetry collection and also working on a novel.
              </p>
            </div>
          </div>
          <div className='imgItem'>
            <img src={Amanda} alt='Amanda' className="staffImage" />
            <div className='imgItemSection'>
              <h2 className='staffName'>Amanda Rhodes</h2>
              <h2 className='staffJob'>Secretary/Trustee</h2>
              <p className='staffDescription'>
                Amanda has been a Care Support Worker for the Mid Yorkshire Care Trust,
                a charitable organisation. This involves complex work such as administration of medication including buckle Midazolam and suction,
                working with babies to the elderly.
                Her work also includes giving respite to unpaid carers in order for them to be able to take a break.
                She has 3 grown up children and 6 grandchildren which keep her very busy. She also enjoys gardening and social family occasions.
              </p>
            </div>
          </div>
          <div className='imgItem'>
            <img src={Martin} alt='Martin' className="staffImage" />
            <div className='imgItemSection'>
              <h2 className='staffName'>Martin Hemingway</h2>
              <h2 className='staffJob'>Treasurer/Trustee</h2>
              <p className='staffDescription'>
              Martin is semi retired but still actively involved in running his own business; designing and
              manufacturing supply tools for the tiling industry, based in West Yorkshire.
              In his spare time he enjoys visiting coastal areas, karaoke and pub quizzes.
              Marin has 10 grandchildren that keep him on his toes.
              </p>
            </div>
          </div>
          <div className='imgItem'>
            <img src={Kathy} alt='Kathy' className="staffImage" />
            <div className='imgItemSection'>
              <h2 className='staffName'>Kathy Trout</h2>
              <h2 className='staffJob'>Chairperson/Trustee</h2>
              <p className='staffDescription'>
              Kathy has an education in Science and worked for the NHS for 10 years before moving to the Computer Industry.
              She formed the Registered Charity West Yorkshire Dog Rescue 20 years ago.
              For the last 8 years she has written poetry and runs Marsden Community Poetry, an Open Mic monthly event in Marsden.
              She produced a Poetry Anthology “Village Voices” published by Maytree Press 2022.
              Kathy loves horses and whales.
              </p>
            </div>
          </div>
          <div className='imgItem'>
            <img src={Martyn} alt='Martyn' className="staffImage" />
            <div className='imgItemSection'>
              <h2 className='staffName'>Martyn Haymonds</h2>
              <h2 className='staffJob'>Volunteer</h2>
              <p className='staffDescription'>
                Martyn is a proud volunteer with Serendipity. Martyn joined Serendipity a few years ago as a service
                user and it changed his life so much that he wanted to be more hands-on and now is actively
                engaged in all areas from facilitating workshops to giving talks to corporations and
                organisations about the work we do, and the difference we make.
                Martyn’s background history in social work brings much to our organisation, but more than that he
                brings much of himself that is caring and compassionate, supporting and nurturing to our group
                members, and in return is supported and nurtured too.
              </p>
            </div>
          </div>
          <div className='imgItem'>
            <img src={Mira} alt='Mira' className="staffImage" />
            <div className='imgItemSection'>
              <h2 className='staffName'>Mira Fadel</h2>
              <h2 className='staffJob'>Trustee</h2>
              <p className='staffDescription'>
                Mira is an ambitious and well-educated British woman who was born in Baghdad,
                and brought up in the very cosmopolitan city Dubai.
                She received her higher education in the UK and has worked as an IT specialist for over two decades.
                Mira is a Publisher, Freelance Teacher, Translator and Community Café owner. Her spare time is spent reading,
                translation and developing computer applications.
              </p>
            </div>
          </div>
          <div className='imgItem'>
            <img src={Philip} alt='Philip' className="staffImage" />
            <div className='imgItemSection'>
              <h2 className='staffName'>Philip Walton</h2>
              <h2 className='staffJob'>Volunteer</h2>
              <p className='staffDescription'>
                Philip is an avid reader and has just completed his own novel. He loves football, American football
                and music. He plays the guitar, paints miniatures and likes to play on his Xbox, but what he enjoys
                most is meeting up with friends and participating in and facilitating creative and mindful writing
                workshops.
              </p>
            </div>
          </div>
          <div className='imgItem'>
            <img src={Tia} alt='Tia' className="staffImage" />
            <div className='imgItemSection'>
              <h2 className='staffName'>Tia</h2>
              <h2 className='staffJob'>Emotional Support Canine & Mascot</h2>
              <p className='staffDescription'>
                Tia joined the Serendipity Family last year & is a registered emotional support dog.
                She needed to be around people dealing with the loss of her best friend Loki.
                Being petted and loved has helped her enormously, and as it turns out, helps others feel better too.
                Tia was born in Hungary in 2018 and for the first 2 years survived on the streets.
                She was eventually rescued by the amazing organisation, Waggs and Wet noses,
                who fostered and nurtured her until she found her forever home with Sonia.
                Tia has had numerous problems in her short few years, but then enter .. Elvis,
                our gorgeous little Maine Coon tabby who for the first few months of his life, thought Tia was his mum.
                This resulted in a false pregnancy and Tia produced milk, yet thrived feeding Elvis.
                Tia is a gentle soul. She loves unconditionally and brings so much joy to so many people.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='link-wags-container'>
        Click here to check out&nbsp;
        <a href="https://www.facebook.com/groups/2008820529405469/" rel="noreferrer" target="blank" className='link-wags'>
         Wags N' Wet Noses Dog Rescue&nbsp; <img src={Paws} alt='paws' className="paws" /></a>
      </div>
      </div>
      <Footer />
    </div>
  )
}
