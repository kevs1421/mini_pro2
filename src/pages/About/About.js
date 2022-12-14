import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">ReadBooks</h2>
            <p className="fs-17">
              I guess you'd say ReadBooks is my mini-project-2. But it's yours
              really. When I started buying books and running a couple of stores
              more than 1 weeks, it was the people that mattered - my customers
              and my staff. Now we buy and sell online. But I don't think that
              should make any difference. It's still about personal service.
            </p>
            <p className="fs-17">-- Mini Project 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
