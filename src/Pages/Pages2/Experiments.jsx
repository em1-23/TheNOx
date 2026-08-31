import React from 'react'
import { Link } from 'react-router-dom'

function Experiments() {
  let Time = new Date()
  let NewYear = Time.getFullYear()
  let NewDay = Time.getDate()
  let NewMonth = Time.getMonth() + 1

  function ExpTemplate(Nox){
    let FirstTime = Nox.Time
    let AllTime = NewYear - Number(FirstTime)

    return(
      <div className="ExpTemplate">
        <h2 className="Name">{Nox.Name}</h2>
        <span className="Exptime">Experiaments : {AllTime} Years</span> <br />
        <a href="" className="YoutubeLink">▶ Youtube Link</a>
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
      <ExpTemplate Name="Html & Css" Time="2024" />
    </div>
  )
}

export default Experiments