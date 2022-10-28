import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../Context/Notes/NoteContext'
const Login = () => {
  const context = useContext(noteContext)
  const {showAlert}=context
  const [credentials, setCredentials] = useState({email:"",password:""})
  let navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
      
            body: JSON.stringify({ email:credentials.email,password:credentials.password}),
          });
          const json = await response.json();
          
          if (json.success){
            //Redirect and save the authtoken
            localStorage.setItem('token',json.authToken)
            showAlert("Logged In successfully","success")
            navigate("/")
          }
          else{
            showAlert("Invalid Credentials","danger")
          }
        
    }
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div style={{padding:'109px'}}>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' onChange={onChange} value={credentials.password} id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary"  >Log In</button>
</form>
    </div>
    
  )
}

export default Login