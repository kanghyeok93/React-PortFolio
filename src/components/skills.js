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
        return (
            <div id="skills" className="skills-area">
                <div className="skills-title">
                    SKILLS
                </div>
                <div className="skills-images">
                    <div>Web - Language</div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_1})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_2})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_3})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_4})`}}><div className="visit">intermediate</div></div>
                </div>
                <div className="skills-images">
                    <div>FrameWork</div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_5})`}}><div className="visit">intermediate</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_6})`}}><div className="visit">intermediate</div></div>
                </div>
                <div className="skills-images">
                    <div>Database</div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_7})`}}><div className="visit">basic</div></div>
                    <div className="skills-image" style={{backgroundImage : `url(${img_url_8})`}}><div className="visit">intermediate</div></div>
                </div>
            </div>
        );
    }
}

export default Skills;