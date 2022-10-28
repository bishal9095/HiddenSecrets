import React,{useContext,useState} from "react";
import noteContext from "../Context/Notes/NoteContext";

const AddNote = () => {
    const context = useContext(noteContext)
    const {addNote,showAlert,mode}=context
    const [note, setNote] = useState({title:"",description:"",tag:""})
    
  const onChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
    
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag)
    setNote({title:"",description:"",tag:""})
    showAlert("Added Note Successfully","success")
    
  }
  
  return (
    <div >
      <div className="container my-3">
        <h4>Add a Note</h4>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="email"
            className={`form-control text-${mode==='dark'?'light':'dark'}`}
            style={{'backgroundColor':`${mode==='dark'?'rgb(140, 153, 166)':'white'}`}}
            id="title"
            name="title"
            placeholder="Your Secret Title"
            onChange={onChange}
            value={note.title}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className={`form-control text-${mode==='dark'?'light':'dark'}`}
            style={{'backgroundColor':`${mode==='dark'?'rgb(140, 153, 166)':'white'}`}}
            id="description"
            name="description"
            placeholder="Your Secret Description"
            onChange={onChange}
            value={note.description}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className={`form-control text-${mode==='dark'?'light':'dark'}`}
            style={{'backgroundColor':`${mode==='dark'?'rgb(140, 153, 166)':'white'}`}}
            id="tag"
            name="tag"
            placeholder="Your Secret Tag"
            onChange={onChange}
            value={note.tag}
            minLength={5}
            required
          />
        </div>
        <button
          disabled={note.title.length<5 || note.description.length<5 }
          type="button"
          className="btn btn-primary rounded-pill"
          onClick={handleSubmit}
        >
          Post
        </button>
        <div className="container my-3"></div>
      </div>
    </div>
  );
};

export default AddNote;
