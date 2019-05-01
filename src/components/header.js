import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    menu = React.createRef();
    toggle = React.createRef();
    header = React.createRef();
    i = React.createRef();

    componentDidMount() {
        this.scrollFunction();
        window.addEventListener('scroll',this.scrollFunction);
        this.toggle.current.addEventListener('click',this.menuToggle);
    }

    scrollFunction = () => {
        const header = this.header.current;

        if(document.documentElement.scrollTop > 70){
            if(!header.classList.contains('nav-fixed')){
                header.classList.add('nav-fixed');
                document.getElementsByTagName('body')[0].style.marginTop = '70px';
                header.style.display = 'none';
                setTimeout(function(){
                    header.style.display = 'block';
                },40);
            }
        }else{
            if(header.classList.contains('nav-fixed')){
                header.classList.remove('nav-fixed');
                document.getElementsByTagName('body')[0].style.marginTop = '0';
            }
        }
    };

    menuToggle = () => {
        if(!this.menu.current.classList.contains('show')){
            this.menu.current.classList.add('show');
            this.i.current.classList.remove('fa-bars');
            this.i.current.classList.add('fa-times');
        }else{
            this.menu.current.classList.remove('show');
            this.i.current.classList.remove('fa-times');
            this.i.current.classList.add('fa-bars');
        }
    };
    render() {
        return (
                <header id="header" className="header-area" ref = {this.header}>
                    <nav id="nav" className="nav-area">
                        <a id="navLogo" className="nav-logo">skh</a>
                        <a id="navToggle" className="nav-toggle" ref = {this.toggle}><i id="toggle_i" className="fa fa-bars" ref = {this.i}/></a>
                        <div id="navMenu" className="nav-menu" ref = {this.menu}>
                            <div className="nav-item"><a id="navHome" className="nav-link">home</a></div>
                            <div className="nav-item"><a id="navAbout" className="nav-link">about</a></div>
                            <div className="nav-item"><a id="navService" className="nav-link">skills</a></div>
                            <div className="nav-item"><a id="navProject" className="nav-link">project</a></div>
                            <div className="nav-item"><a id="navContact" className="nav-link">contact</a></div>
                        </div>
                    </nav>
                </header>
        );
    }
}

export default Header;