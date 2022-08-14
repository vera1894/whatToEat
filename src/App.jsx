import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Home from './Home';
import data from './data';
import axios from 'axios';

function App() {

    //初始值
    const [menu, setMenu] = useState({ name: "", content: "", material: "", process: "" });

    const emojis = ["👉","😃","😉","👍","👏"];

    const [emojiId,setEmojiId] = useState(0);

    let result = {};

    function getData() {

        const id = Math.floor(Math.random() * 50000) + 1; //随机id
        
        console.log("id:" + id)
        var api = '/jisuapi/detail?id=' + id + '&appkey=1ff73a31e2a4cfda225d64a2fdcb844d';
        axios.get(api)
            .then(function (response) {
                console.log(response.data.result.result);
                result = response.data.result.result;
                const materials = result.material.map(x => {
                    return ('<br>' +'&bull;  '+ x.mname + x.amount)
                }).join(" ");
                const process = result.process.map((x,index) => {
                    return (('<br>'+(index+1)+". "+ x.pcontent.replace(/\<br \/\>\n/g, "")))
                }).join('\n');
                setMenu({ name: result.name, content: result.content, material: materials, process: process });
                setEmojiId(Math.floor(Math.random() * 5)) ;
                console.log("menu:" + menu);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Home getData={getData} />} />
                    <Route path="/detail" element={<Detail emoji={emojis[emojiId]} name={menu.name} content={menu.content} material={menu.material} process={menu.process} getData={getData} />} />
                </Routes>
            </Router>
        </div>
    );
};
export default App;