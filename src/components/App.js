import React, {Component, useState} from "react";
import '../styles/App.css';

const projects =[
  { name:'project 1',description:'This is the first project'},
  { name:'project 2',description:'This is the second project'},
  { name:'project 3',description:'This is the third project'},
];

const App = () => {
  return (
    <div id="main" className="App">
      <div className="ns-wrapper">
        {projects.map((project,index) => (
          <div key={index} className="project">
            <h1 data-ns-test='project-name'>{project.name}</h1>
            <h6 data-ns-test='project-description'>{project.description}</h6>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App;


