import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import MyArmy from "./pages/MyArmy/MyArmy";
function App (){
  return(
    <>
    <div className="App">
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/MyArmy" element={<MyArmy/>}/>
    </Routes>
   </Router>      
      </div> 
    </>
  )
}
export default App;