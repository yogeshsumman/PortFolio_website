import React from 'react'
import "./About.css"
import img1 from "./img/img1.jpg"

export const About = () => {
return (
<div className='a'>
  <div className="a-left">
    <div className="a-card bg"></div>
    <div className="a-card">
      <img src={img1} alt="" className="a-img" />
    </div>
  </div>
  <div className="a-right">
    <h1 className="a-title">About Me</h1>
    <p className="a-desc">
      Hello! My name is Yogesh, and I study computer science while working as a software developer.
      I adore making stuff for the internet. Whether it's a website, an application, or something
      else entirely I enjoy making simple designs which provide good user experiences.
    </p>
    <p className="a-desc">
      I also enjoy contributing to open source, working on projects with others, and figuring out how to solve problems.
    </p>
  </div>
</div>
)
}