import React from 'react'
import { ProjectsIdo } from './ProjectsIdo'

function Charle() {
  function ProjectCard(NOx){
    const Link = `/IMgs/ProjectsImage/${NOx.ImageLink}.png`
    let TypeCheck = NOx.Type
    let TypeImageLink
    if(TypeCheck=== "React.js" || TypeCheck=== "React.j" || TypeCheck=== "React" ){
      TypeImageLink = "/IMgs/ProjectsImage/Types/React.svg"
    }else if (TypeCheck === "Html" || TypeCheck === "Css" || TypeCheck === "JavaScript" || TypeCheck === "JS"){
      TypeImageLink = "/IMgs/ProjectsImage/Types/Html.svg"
    }else if (TypeCheck === "Next.js" || TypeCheck === "Next.j" || TypeCheck === "Next"){
      TypeImageLink = "/IMgs/ProjectsImage/Types/Next.svg"
    }else{
      TypeImageLink = "/IMgs/ProjectsImage/Types/MissingImage.svg"
    }
    return(
      <div className="ProjectCard">
        <img src={Link} alt={NOx.Name} className="Image" />
        <div className="leftSlider">
          <h2 className="Name">{NOx.Name}</h2>
          <a href={NOx.Link} target='_blank' className="Link">{NOx.Link}</a><br /><br /><br />
          <span className="Type">{NOx.Type}</span>
        </div>
        <img src={TypeImageLink} alt={NOx.Type} className="TypeImage" />
      </div>
    )
  }
  return (
    <div className='Sections Charle' id="Projects">
      <h4 className='Topic'>See My Projects</h4>
      <h1 className="SpecialUnderName">See Projects</h1>
      <div className="ProjectsSection">
        {ProjectsIdo.map((NO)=>(
          <ProjectCard Name={NO.Name} ImageLink={NO.ImageLink} Link={NO.Link} Type={NO.Type} />
        ))}
      </div>
    </div>
  )
}

export default Charle