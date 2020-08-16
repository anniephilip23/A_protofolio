import React , { useEffect }  from "react";
import Aos from "aos"

const Skill =()=>{
    useEffect(()=>{Aos.init({duration:2000})},[])
    const db = ["SQL","Mongo DB"]
    const lan = ["JavaScript","HTML/CSS","Python"]
    const sys =["ReactJS","AngularJS","Node.js","Express.js","Bootstrap" ,"Visual Studio","Git","JIRA"]
    
    return(
        <div  style={{  height: "100vh",width:"100%"}}>
    <div className="row aos-init aos-animate" style={{height:"100%", marginLeft:"13%" ,color:"white", textAlign:"center"}}>
        <div className ="col-md-3 "  data-aos="flip-left" style={{backgroundColor:"rgb(247, 247, 179)",display:"flex", height:"60%", marginTop :"10%",
         marginBottom :"10%",marginRight:"7%", color:"rgb(57, 138, 214)"}}>
            <div className="row">
              <div style={{marginTop:"3%",marginLeft:"3%",height:"20%" }}>  <h1 style={{fontWeight:"bold",fontSize:"30px",color:"rgb(5, 47, 124)"}}>Coding Languages </h1> </div> 
            <div style={{ textAlign:"left",height:"80%"}} >
                <ul style={{color:"rgb(57, 138, 214)", fontSize:"20px", fontFamily: "cursive"}}>
    {lan.map((ele)=><li style={{marginTop:"5%"}}>{ele}</li>)}
            </ul></div></div>
            
        </div>
        <div className ="col-md-3 " data-aos="flip-up" style={{backgroundColor:"rgb(174, 248, 190)",display:"flex", height:"60%", marginTop :"10%", marginBottom :"10%",marginRight:"7%"}}>
        <div className="row">
              <div style={{marginTop:"3%",marginLeft:"3%",height:"20%" }}>  <h1 style={{fontWeight:"bold",fontSize:"29px",color:"rgb(5, 47, 124)"}}>Frameworks/System</h1> </div> 
            <div style={{ textAlign:"left",height:"80%"}} >
                <ul style={{color:"rgb(57, 138, 214)", fontSize:"20px", fontFamily: "cursive"}}>
    {sys.map((ele)=><li style={{marginTop:"5%"}}>{ele}</li>)}
            </ul></div></div>
            
        </div>
        <div className ="col-md-3 " data-aos="flip-right" style={{backgroundColor:"rgb(100, 247, 227)",display:"flex", height:"60%", marginTop :"10%", marginBottom :"10%",marginRight:"7%"}}>
        <div className="row">
              <div style={{marginTop:"3%",marginLeft:"3%",height:"20%" }}>  <h1 style={{fontWeight:"bold",fontSize:"30px",color:"rgb(5, 47, 124)"}}>Database</h1> </div> 
            <div style={{ textAlign:"left",height:"80%"}} >
                <ul style={{color:"rgb(57, 138, 214)", fontSize:"20px", fontFamily: "cursive"}}>
    {db.map((ele)=><li style={{marginTop:"5%"}}>{ele}</li>)}
            </ul></div></div>

        </div>
    </div>    
    </div>
    )
}


export default Skill;