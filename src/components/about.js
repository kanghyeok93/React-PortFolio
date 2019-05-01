import React, {Component} from 'react';
import profile from '../image/profile.png';
import './about.css';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area">
                <div className="title">
                    ABOUT
                </div>
                <div className="picture">
                    <img src={profile}/>
                    <div className="name">서강혁</div>
                    <div className="job">FRONTEND - DEVELOPER</div>
                </div>
                <div className="text">
                    <div className="intro">
                        <div>안녕하십니까.</div>
                        <div>프론트엔드 개발자 서강혁입니다.</div>
                        궁금하신 점이 있으시다면 언제든지 편하게 연락주세요.
                    </div>
                    <ul>
                        <li>
                            <div className="info">
                                <i class="far fa-calendar-alt"/>3st October, 1993
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <i class="fas fa-phone"/>+82 10-4909-5886
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <i class="fa fa-envelope"/>kanghyeok93@naver.com
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <i class="fas fa-home"/>70, Sosa-ro 78beon-gil, Bucheon-si, Gyeonggi-do, Republic of Korea
                            </div>
                        </li>
                    </ul>
                    <div className="education">
                        <div id="educationTitle" className="education_title">Education</div>
                        <div className="education_part">
                            <div>부천대학교</div>
                            <div>컴퓨터소프트웨어과(3년제)</div>
                            <div>2012.03 ~ 2018.02</div>
                        </div>
                        <div className="education_part">
                            <div>코리아 IT 아카데미</div>
                            <div>프론트엔드 개발자 과정</div>
                            <div>2018.01 ~ 2018.11</div>
                        </div>
                    </div>
                </div>
                <div className="sns">
                    <a href="https://www.facebook.com/rkdgur777" target="_blank">
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a>
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="https://github.com/kanghyeok93" target="_blank">
                        <i className="fab fa-github"/>
                    </a>
                    <a>
                        <i className="fab fa-google-plus-g"/>
                    </a>
                    <a>
                        <i className="fab fa-instagram"/>
                    </a>
                </div>
            </section>
        );
    }
}

export default About;