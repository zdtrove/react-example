import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const Slideshow = ({ input, ratio, mode, timeout }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    let containerRef = useRef(null)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getNewSlideIndex = step => {
        const numberSlide = input.length;
        let newSlideIndex = slideIndex + step;
        if (newSlideIndex >= numberSlide) newSlideIndex = 0;
        else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

        return newSlideIndex;
    }

    useEffect(() => {
        let automaticInterval = null
        const updateDimensions = () => {
            containerRef.current.style.height = `${containerRef.current.offsetWidth / ratio}px`;
        }
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
        if (mode === "automatic") {
            const _timeout = timeout || 5000;
            automaticInterval = setInterval(
                () => setSlideIndex(getNewSlideIndex(1)),
                Number.parseInt(_timeout)
            );
        }
        return function cleanup() {
            window.removeEventListener("resize", updateDimensions)
            if (automaticInterval) clearInterval(automaticInterval);
        };
    }, [ratio, mode, timeout, getNewSlideIndex])

    return (
        <div className="lp-slideshow">
            <div className="container" ref={containerRef}>
                {input.map((image, index) => {
                    return (
                        <div
                            key={index}
                            className={ `slide ${slideIndex === index ? "active" : ""}`}
                        >
                            <div className="number-text">
                                {`${index + 1} / ${input.length}`}
                            </div>
                            <img className="image" src={image.src} alt={image.caption} />
                            <div className="caption-text">{image.caption}</div>
                        </div>
                    )
                })}
                <span className="prev" onClick={() => setSlideIndex(getNewSlideIndex(-1))}>❮</span>
                <span className="next" onClick={() => setSlideIndex(getNewSlideIndex(1))}>❯</span>
            </div>
            <div className="dot-container">
                {input.map((_, index) => {
                    return (
                        <span
                            key={index}
                            className={`dot ${slideIndex === index ? "active" : ""}`}
                            onClick={() => setSlideIndex(index)}
                        >
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Slideshow