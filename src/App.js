
import './App.css'
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar'
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
           setAlert({
            msg : message,
            typ : type
           })
          setTimeout(() => {
            setAlert(null)
          }, 1500);

  }
 
  
  const toggleMode = (cls) =>{
    console.log('cls',cls)
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark')
      showAlert('Dark Mode is Enabled','success')
      document.body.style.backgroundColor = '#323274'
    
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = ' TextUtils -Short Interval'
      // }, 1500);
    } else{
      setMode('light')
      showAlert('light Mode is Enabled','success')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
    }
  }

  const removeBodyClasses = () =>{
     
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');

  }

  return (
      <>
      
         {/* <Navbar title = "textUtils" mode = {mode} toggleMode = {toggleMode}/>
       <Alert alert = {alert} />
        <div className="container my-3" >
          <TextForm heading = "Enter the Text To analyze" showAlert ={showAlert} mode = {mode}/>
        </div> */}
     
            <BrowserRouter>  
              <Navbar title = "textUtils" mode = {mode} toggleMode = {toggleMode}/>    
              <Alert alert = {alert} /> 
              <div className="container my-3" >    
                  <Routes>
                    <Route exact path="/" element={ 
                              <TextForm heading = "Enter the Text To analyze" showAlert ={showAlert} mode = {mode}/>} />
                      <Route exact path="about" element={<About  mode = {mode} />} />       
                  </Routes>
              </div>
            {/*hdfhfhfh*/}
            </BrowserRouter>
          
      </>
  );
}
export default App;
