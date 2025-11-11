import Home from "./Components/Home.jsx"
import Details from "./Components/Details.jsx"
import Contact from "./Components/Contact.jsx"
import About from "./Components/About.jsx"
import Vehicles from "./Components/Vehicles.jsx"
import Header from "./Components/ReusableComponents/Header.jsx"
import Footer from "./Components/ReusableComponents/Footer.jsx"
import { useEffect,useState } from "react"
// useEffect
// use --> istimal
// Effect --> asar / change

// use --> api settimeout settimeinterval etc  outsidefrom  the react project
// api --> server api made in server
// api url or uri https://jsonplaceholder.typicode.com/posts
function App() {
  const [data,setData]= useState([]);
  const api_url = "https://jsonplaceholder.typicode.com/posts"
  const fetchdata = async()=>{
  // console.log("get data ...!");
  
 const getreponse =await fetch(api_url);
    // console.log(getreponse) 
    const response =await getreponse.json();
    // console.log(response);
    setData(response)
    
  }
  useEffect(()=>{
   
    fetchdata();
  },[])
  // console.log(data)
  return (
    <>
     this this starting point of react js 
     {data.map((item)=>(
<>
{item.id}
</>
     ))}
    </>
  )
}

export default App
