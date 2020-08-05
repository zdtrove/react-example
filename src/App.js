import React, { Fragment } from 'react';
import './App.css';

import SlideshowContainer from './containers/slideshow';

export default class App extends React.Component {
    render() {
        return <Fragment>
            <SlideshowContainer />
        </Fragment>
    }
}