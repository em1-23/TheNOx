import React from 'react'
import { Link } from 'react-router-dom'
import Skills from './Skills.json'
import Nox from './Nox'

function Alpha(){
  function TechCard(Nox){
    const Svg = `public/SVGs/${Nox.Name}.svg`
    return(
      <div className="TechCard">
        <img src={Svg} alt={Nox.Name} className="SvgImage" />
      </div>
    )
  }
  const developer = {
    name:"Mahmoud Ahmed Elnagar",
    age:17,
    experiance:"2 Years",
    skills:[
      "'React.js',","'Next.js',","'Three.js'"
    ],
    position:"Building Things For THe Websites"
  }
  function NoxCode(){
    return(
      <div className='NoxCode'>
        <div className="top">
          <h3>{"</>"}  NoxCode</h3>
          <div className="Ciricle"></div>
        </div>
        <div className="CodeSpace">
          <span style={{color:'#875adb'}}>const</span> developer = {"{"} <br />
          <div className="Codes">
            name : <span style={{color:"#de6d2a"}}>"{developer.name}"</span>,<br />
            experiance : <span style={{color:"#de6d2a"}}>"{developer.experiance}"</span>,<br />
            skills : {"["}<span style={{color:"#de6d2a"}}>{developer.skills}</span> {"]"},<br />
            position : <span style={{color:"#de6d2a"}}>"{developer.position}"</span> ,<br />
          </div>
          {"}"};<div className="Blink"></div>
        </div>
      </div>
    )
  }
  return (
    <div className='Sections Alpha' id="Home">
      <div className="LeftSlider">
        <Nox />
        <h1 className="Name">{developer.name}</h1>
        <h4>{developer.skills} Developer</h4>
        <h6>أنا نوكس واقدر اعمل دا كول اليوم سيب رسالة وخلاص</h6>
        <h6>I'm Nox And I Can Do This All Day Just Let A Massage</h6>
        <div className="ButtonsSection">
          <Link className='Button'>Work Toghether</Link>
          <a href="src\Pdfs\Mahmoud_Elnagar.pdf" target='_blank' download={true} className="Button Outline">Download The CV </a>
        </div>
      </div>
      <div className="RightSlider">
        <NoxCode />
        <img src="/IMgs/IMG.png" alt="Iam NOx" className='Me' />
        <div className="BigCiricle"></div>
      </div>
      <div className="BottomSlider">
        <h4>الادوات & Tech</h4>
        <div className="SvgSLider">
          {Skills.map((PO)=>(
            <TechCard key={PO.id} Name={PO.Name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Alpha