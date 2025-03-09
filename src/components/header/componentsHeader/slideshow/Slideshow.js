import React from "react";
import './Slideshow.css'

export default function Slideshow() {
    let slideIndex = 0;
    document.addEventListener("DOMContentLoaded", showSlides);

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 8000);

    }


    return (
        <>
            <div className="slideshow-container">
                <div className="mySlides fade">
                <a href="#"><img src="/imgs/slide1.png" /></a>
                </div>

                <div className="mySlides fade">
                   <a href="#"><img src="/imgs/slide2.png" /></a>
                </div>

                <span className="dot" ></span>
                <span className="dot" ></span>
            </div>
        </>
    )

}