import React, { Fragment } from 'react'
import Slideshow from '../../components/slideshow'
import img1 from '../../images/01.jpg';
import img2 from '../../images/02.jpg';
import img3 from '../../images/03.jpg';
import img4 from '../../images/04.jpg';
import img5 from '../../images/05.jpg';
import img6 from '../../images/06.jpg';

const collection = [
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },
    { src: img3, caption: "Caption three" },
    { src: img4, caption: "Caption four" },
    { src: img5, caption: "Caption five" },
    { src: img6, caption: "Caption six" },
];

function SlideshowContainer() {
    return <Fragment>
        <Slideshow input={collection} ratio={1.5} mode={`manual`} />
        <Slideshow input={collection} ratio={1.5} mode={`automatic`} timeout={`3000`} />
    </Fragment>
}

export default SlideshowContainer
