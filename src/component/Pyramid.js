import React from "react";
import './Pyramid.css';
import angularjs from "./img/angularjs.png"
import Reactjs from "./img/React.png"
import js from "./img/js.png"
import node from "./img/node.png"
const Pyramid = () =><div className="con" data-aos="fade-left">
<div className="wrapper" style={{marginTop:"20%", marginBottom:"10%"}}>
   <div className="sphere main">
  {/* <div className="circle">HTML</div>
  <div className="circle">Angular</div>
  <div className="circle">CSS</div>
  <div className="circle">JS</div>
  <div className="circle">SQl</div>
  <div className="circle">Mongodb</div>
  <div className="circle">nodeJS</div>
  <div className="circle">React</div>  */}
   <div className="circle" style={{}}>
      <img src ={angularjs} alt ="Logo" style ={{ maxWidth:"50%",margin:"1%"}} ></img>
      </div>
    <div className="circle"><img src ={js} alt ="Logo" style ={{ maxWidth:"30%",margin:"50%"}} ></img></div>
    <div className="circle"><img src ="https://storage.googleapis.com/blog-images-backup/1*3SVfBkNZI2f-sspiq59xcw.png" alt ="Logo" style ={{ maxWidth:"50%",margin:"2%"}} ></img></div>
    <div className="circle"></div>
    
    <div className="circle"><img src ="https://www.iconninja.com/files/840/443/663/logo-icon.png" alt ="Logo" style ={{ maxWidth:"30%",margin:"2%"}} ></img></div>
    <div className="circle"><img src ={node} alt ="Logo" style ={{ maxWidth:"30%",margin:"50%"}} ></img></div> 
  </div>
</div>
</div>

export default Pyramid;