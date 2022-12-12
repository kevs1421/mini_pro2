import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Welcome to ReadBooks</h2>
            <p className='fs-17'>My intention, and that of the people who collaborate with the project, is to offer you the best selections of free books on different topics of great interest.</p>
            <p className='fs-17'>We hope that our effort and dedication contributes to making reading a habit in your life. Thanks for visiting us!</p>
            <p>--Mini Project 2</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About