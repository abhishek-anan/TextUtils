import React ,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }


  const toggleMode = () =>{
    if (mode === 'light'){
      setMode("dark")
      document.body.style.background = "#042745"
      showAlert("Dark mode has been enable","success")
    }
    else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode has been enable","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title = {"TextUtils"} mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element = {<About showAlert = {showAlert} mode = {mode}/>}></Route>
            <Route exact path="/" element ={<Textform showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode} />}></Route>
        </Routes>
      </div>
      <Footer showAlert = {showAlert} mode = {mode}/>
      </Router>
    </>
  );
}

export default App;