import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/styling/blog.scss'

export default function Blog() {
  return (
    <div className='container'>
      <Navbar />
        <div id='blog'>
          <h2>Blog page</h2>
        </div>
      <Footer />
    </div>
  )
}
