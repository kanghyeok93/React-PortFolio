import React, {Component} from 'react';
import './project.css'
import portfolio_pic1 from './image/nodejsmongodb.png';
import portfolio_pic2 from './image/nodejspassport.jpg';
import portfolio_pic3 from './image/react_pj.png';
import portfolio_pic4 from './image/comming_soon.jpg';
import pdf1 from './pdf/mongodb게시판.pdf';
import pdf2 from './pdf/passport.pdf';
import pdf3 from './pdf/react.pdf';

class Project extends Component {
    viewPortfolio = (e) =>{
        let polyNode = e.target;
        if(polyNode.tagName.toLowerCase() == 'i'){
            polyNode = polyNode.parentNode;
        }

        let overlyNode = polyNode;
        let imageNode = overlyNode.nextElementSibling;
        let itemNode = overlyNode.parentNode;
        let mainNode = itemNode.nextElementSibling;
        let subNode = mainNode.nextElementSibling;
        let textNode = subNode.nextElementSibling;

        document.getElementById('modalImage').src = imageNode.src;
        document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
        document.getElementById('modalSub').innerHTML = subNode.innerHTML;
        document.getElementById('modalText').innerHTML = textNode.innerHTML;
        document.getElementById('portfolioModal').style.display = 'block';
    };

    filterItems = document.getElementsByClassName('overlay');

    componentDidMount() {
        for(let i=0; i<this.filterItems.length; i++){
            this.filterItems[i].addEventListener('click',this.viewPortfolio);
        }
        document.getElementById('modalClose').addEventListener('click',()=>{
            document.getElementById('portfolioModal').style.display = 'none';
        })
    }

    render() {
        return (
            <div>
            <div id="project" className="project-area">
                <div id="project_scroll" className="project-title">
                    PORTFOLIO
                </div>
                <div className="project-container">
                    <div className="filter-item">
                        <div className="image">
                            <div className="overlay"><i className="far fa-image"></i></div>
                            <img src={portfolio_pic1}/>
                        </div>
                        <div className="main">
                            MongoDB 게시판
                        </div>
                        <div className="sub">
                            MongoDB + Node.js
                        </div>
                        <div className="text">
                            PDF : <a href={pdf1} className="pdf-text" target="_blank">첨부파일 ◀ 클릭</a>
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="image">
                            <div className="overlay"><i className="far fa-image"></i></div>
                            <img src={portfolio_pic2}/>
                        </div>
                        <div className="main">
                            Passport 로그인
                        </div>
                        <div className="sub">
                            Passport + Node.js
                        </div>
                        <div className="text">
                            PDF : <a href={pdf2} className="pdf-text" target="_blank">첨부파일 ◀ 클릭</a>
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="image">
                            <div className="overlay"><i className="far fa-image"></i></div>
                            <img src={portfolio_pic3}/>
                        </div>
                        <div className="main">
                            React 회원등록
                        </div>
                        <div className="sub">
                            React
                        </div>
                        <div className="text">
                            PDF : <a href={pdf3} className="pdf-text" target="_blank">첨부파일 ◀ 클릭</a>
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="image">
                            <div className="overlay"><i className="far fa-image"></i></div>
                            <img src={portfolio_pic4}/>
                        </div>
                        <div className="main">
                            준비중
                        </div>
                        <div className="sub">
                            준비중
                        </div>
                        <div className="text">
                            준비중 입니다.
                        </div>
                    </div>
                </div>
            </div>
                <div id="portfolioModal" className="modal">
                    <span id="modalClose" className="close">&times;</span>
                    <div className="modal-container">
                        <img id="modalImage"/>
                        <div id="modalMain" className="modal-main"></div>
                        <div id="modalSub" className="modal-sub"></div>
                        <div id="modalText" className="modal-text"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;