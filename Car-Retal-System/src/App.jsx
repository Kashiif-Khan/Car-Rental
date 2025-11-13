import Home from "./Components/Home.jsx"
import Details from "./Components/Details.jsx"
import Contact from "./Components/Contact.jsx"
import About from "./Components/About.jsx"
import Vehicles from "./Components/Vehicles.jsx"
import Header from "./Components/ReusableComponents/Header.jsx"
import Footer from "./Components/ReusableComponents/Footer.jsx"
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return(
    <>
    {/* <Header/> */}
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vehicles' element={<Vehicles/>}/> 
      <Route path='/details' element={<Details/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
