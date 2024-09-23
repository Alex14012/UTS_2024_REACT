import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import NavBar from "./components/NavBar"
import Blogs1 from "./pages/contentBlogs/Blogs1"
import Blogs2 from "./pages/contentBlogs/Blogs2"
import Blogs3 from "./pages/contentBlogs/Blogs3"
import Blogs4 from "./pages/contentBlogs/Blogs4"
import Footer from "./components/footer"



function App() {

  return (
  
    <div className="bg-[#121212]">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Blogs" element={<Blogs/>}/>
      <Route path="/Blogs1" element={<Blogs1/>}/>
      <Route path="/Blogs2" element={<Blogs2/>}/>
      <Route path="/Blogs3" element={<Blogs3/>}/>
      <Route path="/Blogs4" element={<Blogs4/>}/>
    </Routes>
    </div>
    
  )
}

export default App
