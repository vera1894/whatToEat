import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';


function Detail(props) {
    function createProcess() {
        return { __html: props.process };
    }

    function createMaterial() {
        return { __html: props.material };
    }

    function creatContent() {
        return { __html: props.content };
    }

    return (
        <div className='container'>
            <div className='details'>

                <div className='head'>
                    <p className='title' >{props.emoji} {props.name}</p>
                    <div dangerouslySetInnerHTML={creatContent()} className='secondTitle'></div>
                </div>
                <div className="detailText">
                    <div className="leftText" >
                        <h3>材料</h3>
                        <div dangerouslySetInnerHTML={createMaterial()} className='leftText'></div>
                    </div>
                    <div className="rightText">
                        <h3>做法</h3>
                        <div dangerouslySetInnerHTML={createProcess()} className='rightText'>{ }</div>
                    </div>
                </div>


            </div>
            <div className='usePart'>
                <button className="homeBtn" onClick={() => { props.getData() }}>灵机一动</button>

            </div>
        </div>
    )
}
export default Detail;