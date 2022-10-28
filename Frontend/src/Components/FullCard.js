import React,{useContext} from "react";
import noteContext from "../Context/Notes/NoteContext";

const FullCard = () => {
  const context=useContext(noteContext)
  const {bigNote,mode}=context
  return (
    <div className={` bg-${mode==='dark'?'dark':'light'} text-${mode==='dark'?'light':'dark'}`}>
    <div className='container my-5 py-5' >
      {bigNote && <div className="card text-center my-5 py-50" style={{background:`${mode==='dark'?'black':'white'}`,color:`${mode==='dark'?'white':'black'}`}}>
        <div className="card-header">Card</div>
        <div className="card-body">
          <h5 className="card-title">{bigNote.note.title}</h5>
          <p className="card-text">
            {bigNote.note.description}
          </p>
          
        </div>
        <div className="card-footer text-muted">{parseInt(Math.abs(Date.now()-Date.parse(bigNote.note.timestamp))/(1000*3600))} hour(s) ago</div>
      </div>}
    </div>
    </div>
  );
};

export default FullCard;
