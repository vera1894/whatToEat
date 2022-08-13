import React from 'react';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import axios from 'axios';

function Home(props){


    return(
        <div style={{paddingTop:"300px"}}>
            <h3 className="title" style={{textAlign:'center'}} >今天吃什么</h3> 
            <div className='usePart'>  
            <Link style={{ textDecoration:'none'}} to="/detail" >
            <button className="homeBtn" onClick={() => {props.getData()}}>灵机一动</button>
            </Link>
            </div>  
        </div>
    )
}
export default Home;