import React from 'react'
import { Link } from 'react-router-dom'
import { Exp } from './data for Exp/exp'
import { Projects } from './data for Exp/projects'

function Experiments() {
  let Time = new Date()
  let NewYear = Time.getFullYear()
  let NewDay = Time.getDate()
  let NewMonth = Time.getMonth() + 1

  function resolveProjectImage(imageName) {
    if (!imageName || imageName === '' || imageName === null || imageName === undefined) {
      return {
        src: '/IMgs/ProjectsImage/MissingProjectsImage.jpg',
        style: { objectFit: 'cover', objectPosition: 'top' }
      }
    }

    return {
      src: `/IMgs/ProjectsImage/${imageName}.png`,
      style: { objectFit: 'cover', objectPosition: 'center' }
    }
  }

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
    const projectImage = resolveProjectImage(NOx.Image)
    let ToolImage1 = `/SVGS/${NOx.Tool1}.svg`
    let ToolImage2 = `/SVGS/${NOx.Tool2}.svg`
    let ToolImage3 = `/SVGS/${NOx.Tool3}.svg`
    let RepoNameGithub = `https://github.com/em1-23/${NOx.RepoNameGithub}`

    const handleProjectImageError = (event) => {
      event.target.src = '/IMgs/ProjectsImage/MissingProjectsImage.jpg'
      event.target.style.objectFit = 'cover'
      event.target.style.objectPosition = 'top'
    }

    return(
      <div className="RepoTemplate">
        <img
          src={projectImage.src}
          alt={NOx.Name}
          style={projectImage.style}
          onError={handleProjectImageError}
        />
        <h1 className="ProjectName">{NOx.Name}</h1>
        <div className="ProjectsTools">
          <img src={ToolImage1} alt={NOx.Tool1} className="Tool" />
          <img src={ToolImage2} alt={NOx.Tool2} className="Tool" />
          <img src={ToolImage3} alt={NOx.Tool3} className="Tool" />
        </div>
        <a href={RepoNameGithub} target='_blank' className="GithubLink">{"</>"}</a>
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
        {Projects.map((e)=>(
          <RepTemplate Name={e.Name} RepoNameGithub={e.RepoNameGithub} Tool1={e.Tool1} Tool2={e.Tool2} Image={e.Image} Tool3={e.Tool3} key={e.id} />
        ))}
      </div>
    </div>
  )
}

export default Experiments