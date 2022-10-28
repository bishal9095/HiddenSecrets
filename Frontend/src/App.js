// import logo from './logo.svg';
import { BrowserRouter as Router,
   Routes,
    Route } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Alert from "./Components/Alert";
import Home from './Components/Home';
import Login from "./Components/Login";
import Navbar from './Components/Navbar';
import Signup from "./Components/Signup";
import noteContext from "./Context/Notes/NoteContext.js";
import { useContext } from "react";
// import NoteState from "./Context/Notes/NoteState";
import Footer from "./Components/Footer";
import LoadingBar from 'react-top-loading-bar';
import FullCard from "./Components/FullCard";
function App() {
  
  const context = useContext(noteContext)
  const {alert,progress,heading}=context
  
  document.title=heading
  
  return (
    <>
    {/* <NoteState> */}
    <Router>
      <Navbar/>
      <LoadingBar
      style={{backgroundImage: 'linear-gradient(to bottom right, red,rgb(255, 102, 0),rgb(255, 0, 102),rgb(163, 0, 204),rgb(61, 0, 153))'}}
        color='#f11946'
        height='4px'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Alert alert={alert} />
      {/* <div className="container"> */}
      <Routes>
        <Route exact path="/" element={<Home />}/>

        <Route exact path="/About" element={<About />}/>
        <Route exact path="/login" element={<Login/>}/>        
        <Route exact path="/signup" element={<Signup/>}/>        
        <Route exact path="/fullCard" element={<FullCard/>}/>
        
      
      </Routes>
      <Footer/>
      {/* </div> */}
    </Router>
    {/* </NoteState> */}
    </>
  );
}

export default App;
