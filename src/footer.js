import React, {Component} from 'react';
import './footer.css'
class Footer extends Component {
    render() {
        return (
         <footer id="footer" className="footer-area">
             <div className="footer-sns">
                 <a id="facebook" className="sns-item" href="https://www.facebook.com/rkdgur777" target="_blank"><i className="fab fa-facebook-square"></i></a>
                 <a id="twitter" className="sns-item"><i className="fab fa-twitter"></i></a>
                 <a id="git" className="sns-item" href="https://github.com/kanghyeok93" target="_blank"><i className="fab fa-github-square"></i></a>
                 <a id="google" className="sns-item"><i className="fab fa-google-plus"></i></a>
                 <a id="instagram" className="sns-item"><i className="fab fa-instagram"></i></a>
             </div>
             <div className="footer-info">
                 <p>Copyright © 2018 SKH. All rights reserved.</p>
             </div>
         </footer>
        );
    }
}

export default Footer;