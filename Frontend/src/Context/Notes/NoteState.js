import React, { useState } from "react";

import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [notes, setNotes] = useState([]);
  const [progress, setProgress] = useState(0)
  const [heading, setHeading] = useState(`${localStorage.getItem('token')?'HS | Home':'HS | Login,Sign Up'}`)
  const [bigNote,setBigNote]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  //Get all nodes
  const getNotes = async() => {
    //API Call to Getnotes
    setProgress(50)
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setProgress(100)
    
    setNotes(json);
  };



  //Add a Note
  const addNote = async(title, description, tag) => {
    //API Call to addnote
    setProgress(50)
    const response = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    setProgress(70)
    console.log(json)
    
    setNotes(notes.concat(json));
    setProgress(100)
  };

  //Delete a node
  const deleteNote = async(id) => {
    //TODO: Delete the note using API
    setProgress(50)
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      
    });
    // eslint-disable-next-line
    const json = await response.json();

    setProgress(70)
    
    showAlert("Deleted Note Successfully","success")
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    setProgress(100)
  };
  
  // API: Getting a big note.
  const getANote=async(id)=>{
    setProgress(50)
    const response=await fetch(`${host}/api/notes/getaNote/${id}`,{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      
    });
    const json=await response.json();
    
    setBigNote(json)
    setHeading('HS | FullCard')
    setProgress(100)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    setProgress(50)
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line
    const json = await response.json();
    setProgress(70)
    
    
    //Change in the notes array not the constant element e . It'll change but you need to affect the real notes array that you are rendering.
    for (let i = 0; i < notes.length; i++) {
      const e = notes[i];
      if (e._id === id) {
        notes[i].title = title;
        notes[i].description = description;
        notes[i].tag = tag;
        break
      }
    }
    setNotes(notes)
    setProgress(100)
  };

  return (
    <NoteContext.Provider
    // eslint-disable-next-line
      value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes,alert,showAlert,mode,setMode,progress,heading,setHeading,getANote,bigNote,getANote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
