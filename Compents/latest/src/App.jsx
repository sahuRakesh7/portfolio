import {useState} from "react"
import React from "react";
import "./index.css";
import BackImg from "./assets/sahu2.png"


const content = [
  [
    "DOB         : 19 Aug 2005",
    "nationality : Indian",
    "languages   : Telugu,English,Hindi",
    "Hobbies     : playing Games ,reading books"
  ],
  [
    "Python programming",
    "HTML,CSS,Bootstrap",
    "JavaScript",
    "React,js",
    "Database , C++"
  ],
  [
    "Visual Arts IT institute (python full stack)",
    "Andhra University (B.com computers)",
    "Govt jr college (Intermdiate)",
    "Z P High School (SSC)"
  
  ],
  [
    "Bank management",
    "Quiz Game",
    "Calculator app",
    "E commerce website",
    "Number gussing Game"
  ],
]

function One(){
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return(
    <div>
   <header>
    <img className="Img" src={BackImg} alt="" />
    <div>
      <h1>Rakesh Sahu</h1>
      <p>Iam  Fullstack developer</p>
    </div>
   </header>
   <div id="tabs">
    <menu>
      <button
      className={activeContentIndex === 0 ? "active" : ""}
      onClick={() => setActiveContentIndex(0)}>

        About me

      </button>

      <button
      className={activeContentIndex === 1 ? "active" : ""}
      onClick={() => setActiveContentIndex(1)}>
       Skills
      </button>

      <button
      className={activeContentIndex === 2 ? "active" : ""}
      onClick={() => setActiveContentIndex(2)}>
       Education
      </button>

      <button
      className={activeContentIndex === 3 ? "active" : ""}
      onClick={() => setActiveContentIndex(3)}>
       portfolio
      </button>

    </menu>
    <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
   </div>
    </div>
  )
}
export default One;