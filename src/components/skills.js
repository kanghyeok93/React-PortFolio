import React, {Component} from 'react';
import './skills.css';
import html5 from '../image/HTML5.png';
import css3 from '../image/CSS3.png';
import javascript from '../image/JAVASCRIPT.png';
import jquery from '../image/JQUERY.png';
import nodejs from '../image/NODEJS.png';
import react from '../image/REACT.png';
import mysql from '../image/MYSQL.png';
import mongodb from '../image/MONGODB.png';
import sass from '../image/sass.png';
import redux from '../image/redux.png';
import mongoose from '../image/mongoose.png';
import axios from '../image/axios.png';
import git from '../image/git.png';
import rb from '../image/rb.png';
import express from '../image/express.png';

class Skills extends Component {
    render() {
        const img_url_1 = html5;
        const img_url_2 = css3;
        const img_url_3 = javascript;
        const img_url_4 = jquery;
        const img_url_5 = nodejs;
        const img_url_6 = react;
        const img_url_7 = mysql;
        const img_url_8 = mongodb;
        const img_url_9 = sass;
        const img_url_10 = redux;
        const img_url_11 = mongoose;
        const img_url_12 = axios;
        const img_url_13 = git;
        const img_url_14 = rb;
        const img_url_15 = express;
        return (
            <div id="skills" className="skills-area">
                <div className="skills-title">
                    SKILLS
                </div>
                <div className="skills-images">
                    <div>Web - Language</div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_1})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_2})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_9})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_3})`}}><div className="visit">intermediate</div></div>
                </div>
                <div className="skills-images">
                    <div>FrameWork</div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_14})`}}><div className="visit">basic</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_4})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_5})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_15})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_6})`}}><div className="visit">intermediate</div></div>
                </div>
                <div className="skills-images">
                    <div>Database</div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_7})`}}><div className="visit">basic</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_8})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_11})`}}><div className="visit">intermediate</div></div>
                </div>
                <div className="skills-images">
                    <div>ETC</div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_13})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_10})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_12})`}}><div className="visit">basic</div></div>
                </div>
            </div>
        );
    }
}

export default Skills;