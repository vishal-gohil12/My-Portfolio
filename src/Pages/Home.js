import React from "react";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import "../Style/Home.css";

export function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Vishal</h2>
        <p style={{ margin: "100px 196px", color: "#e9d35b" }}>
          I'm a skilled web developer and i made over 4 responsive websites and
          web applications. My expertise includes HTML, CSS, JavaScript, React,
          Node.js, and MySQL, among other web technologies.
        </p>
        <div className="prompt">
          <a href="https://www.linkedin.com/in/vishal-gohil-446390230/">
            <LinkedIn />
          </a>
          <a href="mailto:vishalgohil3631@gmail.com">
            <Email />
          </a>
          <a href="https://github.com/vishal-gohil12">
            <GitHub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>React.JS, HTML5, CSS3, Bootstrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
