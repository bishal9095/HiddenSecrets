import React,{useEffect,useContext} from 'react'
import {Link,useLocation, useNavigate} from 'react-router-dom'
import noteContext from '../Context/Notes/NoteContext'
const Navbar = () => {
  // Use Location tracks the location of the current directory rather the path.
  const context=useContext(noteContext)
  const {mode,setMode,setHeading}=context
  let location= useLocation()
  let navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
    setHeading('HS|Login,Sign Up')
  }
  useEffect(() => {
    
  }, [location])
  
  return (
    <div style={{position: 'fixed',top: '0',width:'100%',zIndex:'1'}} >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">HS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'? "active":""}`} onClick={()=>{setHeading(localStorage.getItem('token')?'HS | Home':'HS | Login,SignUp')}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'? "active":""}`} onClick={()=>{setHeading('HS | About')}} to="/about">About</Link>
        </li>
        
      </ul>
      {mode==='dark'?<button className='mx-4 rounded-circle bg-dark text-white' onClick={()=>{setMode('light')}}><i className="fa-solid fa-sun"></i></button>
      :<button className='mx-4 rounded-circle bg-dark text-white' onClick={()=>{setMode('dark')}}><i className="fa-solid fa-moon"></i></button>}
  
      {!localStorage.getItem('token')?<div className="d-flex justify-content-between">
      <Link className="btn btn-outline-secondary text-white mx-2" to="/login"  role="button">LogIn</Link>
      <Link className="btn btn-outline-secondary text-white mx-2" to="/signup"  role="button">SignUp</Link>
      </div>:<button className=' btn btn-outline-secondary text-white' onClick={handleLogout}>Logout</button>}
      
    </div>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar