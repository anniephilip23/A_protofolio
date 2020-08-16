import React, { useEffect }   from "react";
import A from "./img/A.png"
import Aos from "aos"

const Home = () =>
{ const nam1= ["F","u","l","l","s","t","a","c","k","d","e","v","e","l","o","p","e","r",]
    const nam2=["n","n","i","e"]
    const nam3= ["P","h","i","l","i","p","."]
    useEffect(()=>{Aos.init({duration:2000})},[])
    return(
<div   id ="hm"style={{height:"100vh",width:"100%"}}>
    <div className="row aos-init aos-animate" style={{height:"100%", marginLeft:"13%"}}>
    <div className="col-md-6 aos-init aos-animate" style={{color:"white", marginTop :"18%" , marginBottom :"5%",marginLeft:"3%"}}>
    <h1 style={{fontWeight:"bold",fontSize:"60px"}}id ="head">
       <div className="row" data-aos="zoom-out-down" style={{marginBottom:"0%"}}>
            <div id="t11">H</div><div id="t21">i</div><div id="t23">,</div></div></h1>
    <h1 style={{fontWeight:"bold",fontSize:"60px"}} >
    <div className="row"  data-aos="zoom-in" style={{marginBottom:"0%", marginTop:"0%"}}> 
     <div id="t31">I</div> <div id="t24">'</div>
     <div id="t41" style={{marginRight:"3%"}}>m</div>
     {/* <img src ={A} alt ="Logo" style ={{ width:"12%",marginBottom :"0%",marginRight:"-3%",marginLeft:"-2%"}} /> */}
     <div id="a">A</div>
    {nam2.map((ele, ind)=>{
        const lett = "t"
        const x =lett.concat(ind)
        return(
    <div   id={x}> {ele}
    </div>)})}
  
    <div className="row"style={{marginLeft:"1%"}}>{nam3.map((ele, ind)=>{
        const lett = "t"
        const x =lett.concat(ind+4)
        return(
    <div id={x}> {ele}
    </div>)})}</div>
    
    </div>
     </h1>
    <p style={{fontSize:"30px"}} >
    <div className="row"  data-aos="fade-up"
     data-aos-duration="3000"> 
    {nam1.map((ele, ind)=>{
        const lett = "n"
        const x =lett.concat(ind)
        return(
    <div id={x} style={{fontStyle: "italic" ,fontFamily: "cursive"}}><p> {ele}</p>
    </div>)})}
  
    </div></p>
    </div>
    <div className="col-md-4"style={{color:"#2eccb7"}} >
   <div id="let" style ={{ transform: "rotate(-30deg)",textAlign:"center", marginTop:"30%"}}>
       <img src ={A} alt ="Logo" style= {{width: "100%"}}  /></div> 
</div>

</div></div>)
}
export default Home;