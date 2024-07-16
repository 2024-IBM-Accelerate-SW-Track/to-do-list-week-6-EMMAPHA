import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/imagepfp.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Emma Pham</div>
            <div className="brief_description">
            Hello! I am Emma Pham. I am a junior attending the University of Houston. I love meeting new people! I am interested in Cybersecurity and AI!
            Fun fact: I have been playing the piano for 10+ years and my favorite show is Avatar: The Last Airbender!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
