import React, {Component} from 'react';
import './portfoliomodal.css'

class Portfoliomodal extends Component {
    render() {
        return (
            <div id="portfolioModal" className="modal">
                <span id="modalClose" className="close">&times;</span>
                <div className="modal-container">
                    <img id="modalImage"/>
                    <div id="modalMain" className="modal-main"></div>
                    <div id="modalSub" className="modal-sub"></div>
                    <div id="modalText" className="modal-text"></div>
                </div>
            </div>
        );
    }
}

export default Portfoliomodal;