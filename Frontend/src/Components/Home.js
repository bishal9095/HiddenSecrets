import React,{useContext} from "react";
import noteContext from "../Context/Notes/NoteContext";
// import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {
  const context=useContext(noteContext)
  const {mode}=context
  return (
    <div className={`bg-${mode} text-${mode==='dark'?'white':'dark'}`}>
      <div  style={{paddingTop:"60px"}}>
      {/* <h4>Your  Notes</h4> */}
      <Notes/>
      </div>
    </div>
  );
};

export default Home;
