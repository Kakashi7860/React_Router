import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

function App() {
 

  return (
    <>
    <Navbar/>
      <BrowserRouter>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>



      </BrowserRouter>
    </>
  )
}

export default App
