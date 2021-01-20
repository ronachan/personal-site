import React, { Component } from "react";
import "../css/Home.css";

class Home extends Component {
    render() {
        return(
            <div className="homeContainer">
                <header id="homeHeader">
                    <div class="intro">
                        <div class="overlay">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-md-8">
                                        <div class="intro-text">
                                            <h1>Rona Chan</h1>
                                            <p>Software Developer</p>
                                            <a href="#portfolio" class="btn btn-custom btn-lg page-scroll">Portfolio</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;