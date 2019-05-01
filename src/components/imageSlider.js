import React, {Component} from 'react';
import './imageSlider.css';
import one from '../image/img_slide_1.jpg';
import two from '../image/img_slide_2.jpg';
import three from '../image/img_slide_3.jpg';
import four from '../image/img_slide_4.jpg';

class ImageSlider extends Component {

    imageNext = React.createRef();
    imagePrev = React.createRef();
    firstDot = React.createRef();
    secondDot = React.createRef();
    thirdDot = React.createRef();
    fourthDot = React.createRef();
    imageTimer;

    componentDidMount() {
        this.showImageSlides(this.imageSlideIndex);
        this.imageNext.current.addEventListener('click',this.plusImageSlides.bind(null,1));
        this.imagePrev.current.addEventListener('click',this.plusImageSlides.bind(null,-1));
        this.firstDot.current.addEventListener('click',this.currentImageSlides.bind(null,1));
        this.secondDot.current.addEventListener('click',this.currentImageSlides.bind(null,2));
        this.thirdDot.current.addEventListener('click',this.currentImageSlides.bind(null,3));
        this.fourthDot.current.addEventListener('click',this.currentImageSlides.bind(null,4));
        this.imageTimer = setInterval(this.imageSlideTimer,3000);
    }

    imageSlideIndex = 1;

    showImageSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName('image-slide');
        let dots = document.getElementsByClassName('dot');
        if(n > slides.length) { this.imageSlideIndex = 1 }
        if(n < 1) { this.imageSlideIndex = slides.length }
        for(i = 0; i< slides.length; i++){
            slides[i].style.display = 'none';
        }
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(' active','');
        }
        slides[this.imageSlideIndex - 1].style.display = 'block';
        dots[this.imageSlideIndex - 1].className += ' active'
    };

    plusImageSlides = (n) => {
        clearInterval(this.imageTimer);
        this.imageTimer = setInterval(this.imageSlideTimer,3000);
        this.showImageSlides(this.imageSlideIndex += n);
    };

    currentImageSlides = (n) => {
        clearInterval(this.imageTimer);
        this.imageTimer = setInterval(this.imageSlideTimer,3000);
        this.showImageSlides(this.imageSlideIndex = n);
    };

    imageSlideTimer = () => {
        this.plusImageSlides(1);
    };

    render() {
        return (
            <div className="container-area">
                <div className="container-sub-area">
                    <div className="container">
                        <div className="image-slide fade">
                            <img src={one}/>
                        </div>
                        <div className="image-slide fade">
                            <img src={two}/>
                        </div>
                        <div className="image-slide fade">
                            <img src={three}/>
                        </div>
                        <div className="image-slide fade">
                            <img src={four}/>
                        </div>

                        <a id="imagePrev" className="image-prev" ref={this.imagePrev}>&#10094;</a>
                        <a id="imageNext" className="image-next" ref={this.imageNext}>&#10095;</a>

                        <div className="dots">
                            <span id="firstDot" className="dot" ref={this.firstDot}/>
                            <span id="secondDot" className="dot" ref={this.secondDot}/>
                            <span id="thirdDot" className="dot" ref={this.thirdDot}/>
                            <span id="fourthDot" className="dot" ref={this.fourthDot}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageSlider;

