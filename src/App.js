import { BrowserRouter, Routes, Route } from "react-router-dom";
import Serendipity from './pages/serendipity'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import NoPage from './pages/NoPage'


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Serendipity />} />
          <Route path="/serendipity" element={<Serendipity />} />
          <Route path="/serendipity/about" element={<About />} />
          <Route path="/serendipity/blog" element={<Blog />} />
          <Route path="/serendipity/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
