import React from 'react'
import { Link } from 'react-router-dom'
import { SocialData } from './SocialData'

function Social() {
  function SocialStyle(Nox){
    let Link = `/SVGS/${Nox.Name}.svg`
    let Right = Nox.Right
    let Top = Nox.Top
    return(
      <a className="SocialIcon" target='_blank' href={Nox.Link} style={{"--Top":Top,"--Right":Right}}>
        <img src={Link} alt={Nox.Name} />
      </a>
    )
  }
  return (
    <div className='Section Social H'>
      <div className="Header">
        <h3 className="Name">My Socila Media</h3>
        <Link to="/"><h1 className='LogoName'>{"</>"} NoxCode</h1></Link>
      </div>
      <div className="Profiles">
        <img src="/IMgs/Ironman.jpg" alt="ProfileLike" className='ProfilePhoto' />
        {SocialData.map((N)=> (
          <SocialStyle key={N.id} Name={N.Name} Link={N.Link} Top={N.Top} Right={N.Right} /> 
        ))}
      </div>
    </div>
  )
}

export default Social