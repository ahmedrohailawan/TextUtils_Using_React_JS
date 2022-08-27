import React, {useState} from 'react'
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Alert from './components/Alert/Alert'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {
  // dark and light modes
  const togglemode = () =>{
    if (mode === "primary"){
      setmode("dark")
      document.body.style.backgroundColor = 'black'
      showalert("Dark mode has been enabled","success")
    }else{
      setmode("primary")
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been enabled","success")
    }
  }
  const [mode, setmode] = useState('primary');
  
  // alert setup
  const showalert = (message,type) =>{
    setalert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const [alert,setalert] = useState(null)

  return (
    <>  
      <Navbar title="TextUtils" mode={mode} togglemode = {togglemode}/>
      <Alert alert = {alert}/>
      <Routes>
        <Route exact path="/" element={<Home mode={mode} showalert = {showalert}/>} />
        <Route exact path="/index.html" element={<Home mode={mode} showalert = {showalert}/>} />
        <Route exact path="about" element={<About mode={mode} showalert = {showalert} />} />
      </Routes>  

    
    </>
  );
}

export default App;
