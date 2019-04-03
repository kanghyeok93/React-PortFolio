import React, {Component} from 'react';
import Header from './header';
import ImageSlider from "./imageSlider";
import About from "./about";
import Skills from "./skills";
import Project from "./project";
import Footer from "./footer";
class PortFolio extends Component {
    componentDidMount() {
        document.getElementById('navHome').addEventListener('click',this.moveTo.bind(null,'header'));
        document.getElementById('navAbout').addEventListener('click',this.moveTo.bind(null,'about'));
        document.getElementById('navService').addEventListener('click',this.moveTo.bind(null,'skills'));
        document.getElementById('navProject').addEventListener('click',this.moveTo_project.bind(null,'project'));
        document.getElementById('navContact').addEventListener('click',this.moveTo_project.bind(null,'footer'));
    }

    moveTo = (id) => {
        if(id == 'navLogo'){
            window.scrollTo(0,0);
        }else{
            window.scrollTo(0,document.getElementById(id).offsetTop -70);
        }
        document.getElementById('navMenu').classList.remove('show');
        document.getElementById('toggle_i').classList.remove('fa-times');
        document.getElementById('toggle_i').classList.add('fa-bars');
    };
    moveTo_project = (id) => {
        if(id == 'navLogo'){
            window.scrollTo(0,0);
        }else{
            window.scrollTo(0,document.getElementById(id).offsetTop -120);
        }
        document.getElementById('navMenu').classList.remove('show');
        document.getElementById('toggle_i').classList.remove('fa-times');
        document.getElementById('toggle_i').classList.add('fa-bars');
    };
    render(){
        return (
            <div>
                <Header></Header>
                <ImageSlider></ImageSlider>
                <About></About>
                <Skills></Skills>
                <Project></Project>
                <Footer></Footer>
            </div>
        );
    }
}

export default PortFolio;