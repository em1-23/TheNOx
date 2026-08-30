import React from 'react'
import { Tooles } from './ToolsData'

function Tools() {
  function ToolCard(NOx){
    let ImageSvgLink = `/SVGS/${NOx.SvgLink}.svg`
    return(
      <div className="ToolCard">
        <img src={ImageSvgLink} alt={NOx.Name} className="Image" />
        <div className="Description">
          <h3 className="NameOfTool">{NOx.Name}</h3>
          <span className="TypeOfTheTool">Tool Type : {NOx.Type}</span><br /><br />
          <a href={NOx.DownloadLink} target='_blink' className="button_border"><span>Download It</span></a>
        </div>
      </div>
    )
  }
  return (
    <div className='Section TechnologiesandTools'>
      <h1 className="Names">See The Tools</h1>
      <div className="ToolsSection">
        {Tooles.map((N)=>(
          <ToolCard DownloadLink={N.DownloadLink} FullType={N.FullType} SvgLink={N.SvgLink} Name={N.Name} Type={N.Type} />
        ))}
      </div>
    </div>
  )
}

export default Tools