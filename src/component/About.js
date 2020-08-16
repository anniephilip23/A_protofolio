import React, { useEffect } from "react";
import Pyramid from "./Pyramid"
import Aos from "aos"
const About = () =>{
useEffect(()=>{Aos.init({duration:2000})},[])
return(
<div  style={{  height: "100vh",width:"100%"}}>
    <div className="row aos-init aos-animate" style={{height:"100%", marginLeft:"13%"}}>
    <div className="col-md-5" style={{color:"rgb(57, 138, 214)", marginTop :"10%" , marginBottom :"5%"}}>

    <div data-aos="zoom-in"> <h1 style={{fontWeight:"bold",fontSize:"40px"}}>About me :</h1></div>
       
        <div   data-aos="fade-up-right">
    <p style={{color:"white", fontSize:"16px", fontFamily: "cursive",marginTop :"5%"}}>
        I am a Full stack Devleoper who loves to transform ideas into reality using code,
         a Js Enthusiast and a Progressive Web App Developer</p>
         <p style={{color:"white", fontSize:"16px",fontFamily: "cursive", marginTop :"1%"}}>I love to work with React Js  
         and Angular Js to create awesome user experiences.</p>
         </div>
         <div   data-aos="fade-up" style={{ marginTop:"20%"}} >
   <a href="https://drive.google.com/file/d/1GFho8_J6iGMdpRe8x2f7DoLVJXC0ywl2/view?usp=sharing" target="_blank"
   style={{backgroundColor:"rgb(57, 138, 214)",color:"white",border:"none",borderRadius:"12px", 
   fontWeight:"bold", padding:"2%", fontSize:"20px", textDecoration:"none"}} >Resume</a>
         </div>
         </div>
    <div className="col-md-7"style={{color:"#2eccb7", marginTop :"10%" , marginBottom :"10%"}} ><div  className="aos-init aos-animate" data-aos="zoom-in-right"><Pyramid/></div>
</div></div></div>)}


export default About;