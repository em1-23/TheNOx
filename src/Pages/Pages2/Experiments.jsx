import React from 'react'
import { Link } from 'react-router-dom'
import { Exp } from './data for Exp/exp'

function Experiments() {
  let Time = new Date()
  let NewYear = Time.getFullYear()
  let NewDay = Time.getDate()
  let NewMonth = Time.getMonth() + 1

  function ExpTemplate(Nox){
    let FirstTime = Nox.Time
    let AllTime = NewYear - Number(FirstTime)
    if (AllTime === 0){
      AllTime = "Learning Now"
    }
    else{
      AllTime = `${AllTime} Year`
    }
    let Links = `/SVGS/${Nox.Linkss}.svg`
    return(
      <div className="ExpTemplate">
        <img src={Links} alt={Nox.Name} />
        <h2 className="Name">{Nox.Name}</h2>
        <span className="Exptime">Experiaments : {AllTime}</span> <br />
      </div>
    )
  }
  function RepTemplate(NOx){
    let ProjectImageLink = `/IMgs/ProjectsImage/${NOx.Image}.png`
    let Style = {}

    if (NOx.Image === "" || NOx.Image === null || NOx.Image === undefined){
      ProjectImageLink = `/IMgs/ProjectsImage/MissingProjectsImage.jpg`
      Style = { objectFit: 'cover', objectPosition: 'center' }
    } else {
      ProjectImageLink = `/IMgs/ProjectsImage/${NOx.Image}.png`
      Style = { objectFit: 'cover', objectPosition: 'center' }
    }

    return(
      <div className="RepoTemplate">
        <img src={ProjectImageLink} alt={NOx.Name} style={Style} />
        <h1 className="ProjectName">{NOx.Name}</h1>
      </div>
    )
  }
  return (
    <div className='Section Experiments'>
      <div className="Header">
        <h3 className="Name">Experiments And Projects</h3>
        <div className="Time">Date : {NewDay} / {NewMonth} / {NewYear}</div>
        <Link to="/"><h1 className='LogoName'>{"</>"} NoxCode</h1></Link>
      </div>
      <h1 className="Name">Skills</h1>
      <div className="TemplatesSection">
        {Exp.map((S)=>(
          <ExpTemplate Name={S.Name} Time={S.Year} Linkss={S.Linkss} />
        ))}
      </div>
      <h1 className='Name'>Projects</h1>
      <div className="TemplateSection">
        <RepTemplate Name="Project Test 1" />
      </div>
    </div>
  )
}

export default Experiments