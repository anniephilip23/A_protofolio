import React , { useEffect }  from "react";
import Aos from "aos"
import repo from "./img/repo.png"
import covid from "./img/covid.jpg"
import page from "./img/pagenation.png"
import mem from "./img/memory.png"
import quiz from "./img/quiz.jpg"
import todo from "./img/todo.jpg"
import tic from "./img/tictac.jpg"
import ins from "./img/insure.jpg"

const Project =()=>{
    const proj =[{img: repo, url:"https://anniephilip23.github.io/GithubRepo/" },
    {img: repo, url:"https://anniephilip23.github.io/GithubRepo/" },
    {img: repo, url:"https://anniephilip23.github.io/GithubRepo/" },
]
    useEffect(()=>{Aos.init({duration:2000})},[])

    return(<div  style={{  height: "100vh",width:"100%"}}>
    <div className="row aos-init aos-animate" style={{ marginLeft:"13%", }}>
{/* {proj.map((ele)=>
<div className="col-md-3 hold" style={{backgroundColor:"whitesmoke" ,border:" 5px solid grey"}}>
    <img className="my-img" src={ele.img} style={{maxWidth: "100%",
        maxHeight: "100%",display: "block" }}/>
        <p className="txt">View</p>
        </div>)} */}
       <div className="hold"   data-aos="fade-down"
     data-aos-duration="3000" id="p1" style={{backgroundColor:"white",width:"220px" ,border:" 5px solid grey", textAlign: "center",marginTop:"3%"}}>
           <a href="https://anniephilip23.github.io/GithubRepo/" target="_blank">
    <img className="my-img" src={repo} style={{maxWidth: "100%",width:"220px",
        height: "150px",display: "block" }}/></a>
        </div> 

        <div className="hold"   data-aos="fade-down"
     data-aos-duration="3000" style={{backgroundColor:"white" ,width:"200px",border:" 5px solid grey", textAlign: "center", marginLeft:"20%",marginTop:"3%"}}>
           <a href="https://anniephilip23.github.io/Project3/" target="_blank">
    <img className="my-img" src={covid} style={{maxWidth: "100%",
        height: "150px", width:"220px",display: "block"}}/></a>
        </div> 

        <div className="hold"  data-aos="fade-down"
     data-aos-duration="3000" style={{backgroundColor:"white",width:"200px",border:" 5px solid grey", textAlign: "center", marginLeft:"20%",marginTop:"3%"}}>
           <a href="https://anniephilip23.github.io/Pagination/" target="_blank">
    <img className="my-img" src={page} style={{maxWidth: "100%",
        height: "150px", width:"220px",display: "block"}}/></a>
        </div> 
    </div>
    {/* row 2 */}
    <div className="row aos-init aos-animate" style={{ marginLeft:"13%"}}>
    <div className="hold"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     id="p2" style={{backgroundColor:"white",width:"220px" ,border:" 5px solid grey", textAlign: "center",marginTop:"5%"}}>
           <a href="https://anniephilip23.github.io/TestpressSchoolQuiz/" target="_blank">
    <img className="my-img" src={quiz} style={{maxWidth: "100%",width:"220px",
        height: "150px",display: "block" }}/></a>
        </div> 

        <div className="hold"
        data-aos="fade-left"
        data-aos-offset="300"
     data-aos-easing="ease-in-sine"
         id="p3" style={{backgroundColor:"white",height: "160px"  ,width:"220px",border:" 5px solid grey", textAlign: "center", marginLeft:"20%",marginTop:"5%"}}>
           <a href="https://anniephilip23.github.io/ToDo/" target="_blank">
    <img className="my-img" src={todo} style={{maxWidth: "100%",
        height: "150px", width:"220px",display: "block"}}/></a>
        </div> 
    </div>

    {/* row 3 */}
    <div className="row aos-init aos-animate" style={{ marginLeft:"13%"}}>

    <div className="hold"  data-aos="fade-up"
     data-aos-duration="3000"
      id="p4" style={{backgroundColor:"white",width:"220px" ,border:" 5px solid grey", textAlign: "center",marginTop:"3%"}}>
           <a href="https://anniephilip23.github.io/tictac/" target="_blank">
    <img className="my-img" src={tic} style={{maxWidth: "100%",width:"220px",
        height: "150px",display: "block" }}/></a>
        </div> 

        <div className="hold"  data-aos="fade-up"
     data-aos-duration="3000" style={{backgroundColor:"white" ,width:"200px",border:" 5px solid grey", textAlign: "center", marginLeft:"20%",marginTop:"3%"}}>
           <a href="https://anniephilip23.github.io/weassist/" target="_blank">
    <img className="my-img" src={ins} style={{maxWidth: "100%",
        height: "150px", width:"220px",display: "block"}}/></a>
        </div> 

        <div className="hold"  data-aos="fade-up"
     data-aos-duration="3000" style={{backgroundColor:"white",width:"200px",border:" 5px solid grey", textAlign: "center", marginLeft:"20%",marginTop:"3%"}}>
           <a href="https://anniephilip23.github.io/project2/" target="_blank">
    <img className="my-img" src={mem} style={{maxWidth: "100%",
        height: "150px", width:"220px",display: "block"}}/></a>
        </div> 
        </div>
        </div>) 
}


export default Project;