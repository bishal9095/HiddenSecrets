import React, { useContext, useEffect,useRef,useState } from "react";
import Noteitem from "./Noteitem";
import noteContext from "../Context/Notes/NoteContext";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
const Notes = () => {
  //For using the context APIs you have to use the noteContext not h NoteStates as NoteStates are only the states that you dfine inside it. But for using purpose you have to always use the noteContext
  let navigate=useNavigate()
  
  const context = useContext(noteContext);
  const { notes, getNotes,editNote,showAlert,mode } = context;
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:"default"})
  useEffect(() => {
    if (localStorage.getItem('token')){
    getNotes();
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };
  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
    
  };
  const handleSubmit=(e)=>{
    showAlert("Note Updated Successfully","success")
    editNote(note.id,note.etitle,note.edescription,note.etag)
    getNotes()
    
    refClose.current.click()
    

  }
  
  return (
    <div  >
      <AddNote />

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
        style={{display:'none'}}>
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            {/* Form to update node */}

            <div className="mb-3">
          <label htmlFor="title"  className="form-label">
            Title
          </label>
          <input
            value={note.etitle}
            type="email"
            className="form-control"
            id="etitle"
            name="etitle"
            placeholder="Your Secret Title"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            value={note.edescription}
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            placeholder="Your Secret Title"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tags
          </label>
          <input
            value={note.etag}
            type="text"
            className="form-control"
            id="etag"
            name="etag"
            placeholder="Your Secret Title"
            onChange={onChange}
          />
        </div>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleSubmit}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{minHeight:'50vh',color:`${mode==='dark'?'white':'black'}`}}>
      <h4>Your Notes</h4>
      {notes.length===0 && <div className="d-flex justify-content-center" ><b>Add some secrets you have</b></div>}
      <div className="row">
        
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
        </div>
      </div>
      
    </div>
  );
};

export default Notes;
