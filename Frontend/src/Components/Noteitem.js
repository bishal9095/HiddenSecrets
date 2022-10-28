import React,{useContext} from "react";
import { Link } from "react-router-dom";
import noteContext from "../Context/Notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext)
  const {deleteNote,mode,getANote}=context
  
    const {_id,title,description}=props.note
    const {updateNote}=props
  return (
    
    <div className={`col-md-3 text-${mode==='dark'?'light':'dark'}`}>
      <div className={`card my-3 bg-${mode==='dark'?'secondary':'white'}`}  >
      <img src="https://img.freepik.com/free-photo/orange-texture_95678-73.jpg?w=740&t=st=1665760558~exp=1665761158~hmac=d5098d7ca1b53c1939b3bc2e29d6f76112927e8d82db6a18f8bbc9230eddbe67" className="card-img-top" height='100' width='100' alt="default preview"/>
        
        <div className="card-body" style={{minHeight:"30vh"}}>
           
          <h5 className="card-title">{title.length>30?title.slice(0,50)+'...':title} </h5>
          <p className="card-text" >
            {description.length>100?description.slice(0,80)+'...':description}
          </p>
          {description.length>100 &&<Link to="/fullCard" className={`card-link text-${mode==='dark'&&'white'} `} onClick={()=>{getANote(_id)}} >Read full</Link>}

          <div className="d-flex justify-content-between">
          <i className="fa-solid fa-trash" onClick={()=>{deleteNote(_id)}} ></i>
          <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(props.note)}}></i>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Noteitem;
