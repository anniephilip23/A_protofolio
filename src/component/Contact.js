import React , { useEffect }  from "react";
import Aos from "aos"
import Maps from "./Map"

const Contact =()=>{
    useEffect(()=>{Aos.init({duration:2000})},[])

   return(<div  style={{  height: "100vh",width:"100%"}}>
   <div className="row aos-init aos-animate" style={{height:"100%", marginLeft:"13%"}}>
   <div className="col-md-5" style={{color:"rgb(57, 138, 214)", marginTop :"10%" , marginBottom :"5%"}}>

   <div data-aos="zoom-in"> <h1 style={{fontWeight:"bold",fontSize:"40px"}}>Contact me :</h1>
   </div>
   <div   data-aos="fade-up-right">
    <p style={{color:"white", fontSize:"16px", fontFamily: "cursive",marginTop :"7%"}}>
       Drop a mail @ <h5 style={{color:"rgb(57, 138, 214)", fontSize:"20px", fontFamily: "cursive",marginTop :"2%"}}>anniephilip23@gamil.com</h5> </p>
         <p style={{color:"white", fontSize:"16px",fontFamily: "cursive", marginTop :"7%"}}>
         Ring me @<h5 style={{color:"rgb(57, 138, 214)", fontSize:"20px", fontFamily: "cursive",marginTop :"2%"}}>
             9500051160 / 6381131213</h5> </p>
         </div>
   </div>
   <div className="col-md-7"style={{color:"#2eccb7", marginTop :"10%" , marginBottom :"10%"}} >

   
</div>
   </div>
   </div>
   ) 
}


export default Contact;