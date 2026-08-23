import React from 'react'
import { SkillIMaster } from './SkillIMaster'

function Bravo() {
  function Skill(NoxS){
    const SvgName = NoxS.Name === 'React' ? 'react' : NoxS.Name
    let SvgLink = `/SVGS/${SvgName}.svg`
    return(
      <div className="SkillsCard">
        <img src={SvgLink} className='Icon' alt={NoxS.Name} />
        <h4>{NoxS.Name}</h4>
        <div className="Bar">
          <span className="ProgressNumber">{NoxS.Progress}%</span>
          <div className="Progress" style={{width: `${NoxS.Progress}%`}}></div>
        </div>
      </div>
    )
  }
  return (
    <div className='Sections Bravo' id="Experiance">
      <h4 className='Topic'>My Skills</h4>
      <h1 className='SpecialUnderName'>Technologies I Master</h1>
      <div className="Skills">
        {SkillIMaster.map((PO)=>(
          <Skill key={PO.id} Name={PO.Name} Progress={PO.Progress} />
        ))}
      </div>
    </div>
  )
}

export default Bravo