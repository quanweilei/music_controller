import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className = "center"> 
            <HomePage></HomePage>
        </div>);
    }
}

const appDiv = document.getElementById('app');
render(<App name = "tim"/>, appDiv);