import React, { useEffect, useState, useRef } from "react";
import './Slideshow.css';

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slideRef = useRef(null);
    const dotRef = useRef(null);

    // نمایش اولین اسلاید در لحظه mount شدن
    useEffect(() => {
        if (slideRef.current && dotRef.current) {
            let slides = slideRef.current.children;
            let dots = dotRef.current.children;

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[0].style.display = "block"; // اولین اسلاید را نمایش بده
            dots[0].className += " active"; // نقطه‌ی مربوطه را فعال کن
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (slideRef.current && dotRef.current) {
                let slides = slideRef.current.children;
                let dots = dotRef.current.children;

                // پنهان کردن تمام اسلایدها
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }

                let newIndex = (slideIndex + 1) % slides.length;
                setSlideIndex(newIndex);

                slides[newIndex].style.display = "block"; // نمایش اسلاید جدید

                // حذف کلاس active از همه‌ی دایره‌ها
                for (let i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                dots[newIndex].className += " active"; // فعال‌سازی نقطه مربوطه
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    return (
        <div className="slideshow-container">
            <div ref={slideRef}>
                <div className="mySlides fade1">
                    <a href="#">
                        <picture>
                            <source srcSet="/imgs/slide1-tablet1.PNG" media="(max-width: 768px)" />
                            <img className="slide-img" src="/imgs/slide1.png" alt="Slide 1" />
                        </picture>
                    </a>
                </div>

                <div className="mySlides fade1">
                    <a href="#">
                        <picture>
                            <source srcSet="/imgs/slide2-tablet1.PNG" media="(max-width: 768px)" />
                            <img className="slide-img" src="/imgs/slide2.png" alt="Slide 2" />
                        </picture>
                    </a>
                </div>
            </div>

            <div ref={dotRef}>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}
