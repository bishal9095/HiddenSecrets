import React,{useContext} from "react";
// import { useEffect } from 'react'
import noteContext from '../Context/Notes/NoteContext'
const About = () => {
  const context =useContext(noteContext)
  const {mode}=context
  return (
    <div className={`bg-${mode} text-${mode==='dark'?'white':'dark'}`}>
      
        <div
          className="position-relative "
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1527236438218-d82077ae1f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            height:"90vh",
            width:"auto"
          }}
        >
          <div className="container position-absolute top-50 start-50 translate-middle">
          <h5 className="card-title fs-1 fw-bolder" style={{color:'rgb(228, 247, 255)',textAlign:'center',fontFamily:"Questrial', serif"}}>About Us</h5>
          <p className="fs-4" style={{color:'rgb(228, 247, 255)',fontFamily:"Questrial', serif"}}>
            We are here to keep your secrets to yourself. With high end security so that no data breach occurs also we make sure that its only you thats looks after your notes. Happy hiding your secrets.<br/>
            A secret's worth depends on the people from whom it must be kept.
          </p>
          </div>

        </div>
       <div className="container" > 
      <div className="container my-3 fs-4" style={{fontFamily:"HKGrotesk-Pro-Bold"}}>
        <div className="container ">
        <h2 className="fs-2 fw-bolder" style={{textAlign:'center'}}>Build Stack</h2>
         <p>This application is built with Express as its Backend Framework with strong APIs to help users to Login and Create their Accounts. Also we are using MongoDB as its storage Database.To make it more User Friendly we use React. NodeJs for its  Backend Server. Mongoose to create Schemas for the objects. Hope you enjoy the App. </p>
         </div>
        <div className="container d-flex justify-content-center ">
        <p>Its not only about secrets you can write anything and add it to your collection. May it helps to retain the information that you need later.</p>
        <iframe title="video" src="//player.vimeo.com/video/757210062?api=1&background=1"/>
      </div>

      <div className="container">  
        <p>The benefits are that you dont have to pay anything rather just login or Create yourself and get started. Thats all</p>
      </div>
      </div>
      </div>

      <div className='position-relative text-black' style={{height:"40vh", backgroundColor:`${mode==='light'?'rgb(220, 220, 188)':'rgb(200,200,200)'}`}}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 style={{fontFamily:"Do Hyeon','serif",textAlign:'center'}}>Say Hello!</h1>
          <h2>hiddensecrets@hs.ac.in</h2>
        </div>
      </div>

      
     </div>
  );
};

export default About;
