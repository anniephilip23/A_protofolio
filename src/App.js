import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./component/About"
import Home from "./component/Home"
import A from "./component/img/A.png"
import home from "./component/img/home.png"
import Skill from "./component/Skill"
import Contact from "./component/Contact"
import Project from "./component/Project"
import abt from "./component/img/abt.png"
import skill from "./component/img/skill.png"
import contact from "./component/img/contact.png"
import proj from "./component/img/proj.png"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="container-fluid"  id ="main">

     <Router>
    
       <div id="router"> 
       <div className="sidenav" style={{textAlign:"center"}}>
       <div><img src ={A} alt ="Logo" style ={{width:"50%"}} className="image1"></img></div>
       <div  id ="nam" style={{color:"white", fontSize:"100%"}}>Annie</div>
   
   <nav style={{marginTop:"50%"}}>
       
          <Link to="/" style={{color: "white",fontSize: "20px", fontWeight:"bold", textDecoration : "none"}}><div className="logo-holder">
    <img src={home} className="image" style={{width:"40%"}}/>
    <p className="text" style={{color:"rgb(57, 138, 214)", fontSize:"60%"}}>Home</p>
</div></Link>
          <Link to="/about" style={{color: "white",fontSize: "20px", fontWeight:"bold",textDecoration : "none"}}>
            <div className="logo-holder">
    <img src={abt} className="image" style={{width:"60%"}}/>
    <p className="text" style={{color:"rgb(57, 138, 214)", fontSize:"60%"}}>About</p>
</div></Link>

<Link to="/skill" style={{color: "white",fontSize: "20px", fontWeight:"bold",textDecoration : "none"}}>
  <div className="logo-holder">
    <img src={skill} className="image" style={{width:"50%"}}/>
    <p className="text" style={{color:"rgb(57, 138, 214)", fontSize:"60%"}}>Skills</p>
</div></Link>

<Link to="/pro" style={{color: "white",fontSize: "20px", fontWeight:"bold",textDecoration : "none"}}>
  <div className="logo-holder">
    <img src={proj} className="image" style={{width:"50%"}}/>
    <p className="text" style={{color:"rgb(57, 138, 214)", fontSize:"60%"}}>My Work</p>
</div></Link>

<Link to="/con" style={{color: "white",fontSize: "20px", fontWeight:"bold",textDecoration : "none"}}>
  <div className="logo-holder">
    <img src={contact} className="image" style={{width:"50%"}}/>
    <p className="text" style={{color:"rgb(57, 138, 214)", fontSize:"60%"}}>Reach Me</p>
</div></Link>
    </nav> 
</div>
</div>     
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skill">
          <Skill/>
          </Route>
          <Route path="/con">
            <Contact />
          </Route>
          <Route path="/pro">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
    </Router>

    </div>
  );
}

export default App;
