import React, {Component} from 'react';
import Header from './components/header';
import Title from './components/title';
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Footer from "./components/footer";

class PortFolio extends Component {

    componentDidMount() {
        document.getElementById('navHome').addEventListener('click',this.moveTo.bind(null,'header'));
        document.getElementById('navAbout').addEventListener('click',this.moveTo.bind(null,'about'));
        document.getElementById('navService').addEventListener('click',this.moveTo.bind(null,'skills'));
        document.getElementById('navProject').addEventListener('click',this.moveTo_project.bind(null,'project'));
        document.getElementById('navContact').addEventListener('click',this.moveTo_project.bind(null,'footer'));
    }

    moveTo = (id) => {

        window.scrollTo(0,document.getElementById(id).offsetTop -70);

        document.getElementById('navMenu').classList.remove('show');
        document.getElementById('toggle_i').classList.remove('fa-times');
        document.getElementById('toggle_i').classList.add('fa-bars');
    };

    moveTo_project = (id) => {

        window.scrollTo(0,document.getElementById(id).offsetTop -120);

        document.getElementById('navMenu').classList.remove('show');
        document.getElementById('toggle_i').classList.remove('fa-times');
        document.getElementById('toggle_i').classList.add('fa-bars');
    };

    render(){
        return (
            <div>
                <Header/>
                <Title/>
                <About/>
                <Skills/>
                <Project/>
                <Footer/>
            </div>
        );
    }
}

export default PortFolio;