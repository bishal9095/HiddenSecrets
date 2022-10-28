import React from "react";

const Alert = (props) => {
  
//   const capitalize=(type)=>{
        
//     return type[0].toUpperCase()+type.slice(1)
// }

  return (
    <div style={{position: "fixed",top:"1vh",width:"25vw",marginLeft:"40vw", zIndex:"1"}}>
      {props.alert &&<div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.type==='success'?<i className="fa-solid fa-circle-check mx-2"></i>:
      <i className="fa-solid fa-triangle-exclamation mx-2"></i>}
         {props.alert.message}
      </div>}
    </div>
  );
};

export default Alert;
