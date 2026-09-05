import React from 'react'
import { Link } from 'react-router-dom'
import { FileListOne } from './data for Goals/FileListOne'
import { FileListTwo } from './data for Goals/FileListTwo'
import { FileListThree } from './data for Goals/FileListThree'

function Goals() {
  return (
    <div className="Section Goals H">
      <div className="Header">
        <h3 className="Name">Goals</h3>
        <Link to="/"><h1 className='LogoName'>{"</>"} NoxCode</h1></Link>
      </div>
      <div className="TheTerms">
        <div className="TermStyleFlipMe" style={{'--ColorOfTheBackground':"#690080"}}>
          <div className="Front">
            <h1>Short Term</h1>
          </div>
          <div className="Back">
            {FileListOne.map((e)=>(
              <li className="ListStyle" key={e.id}>{e.id}. {e.List}</li>
            ))}
          </div>
        </div>
        <div className="TermStyleFlipMe" style={{'--ColorOfTheBackground':"#0e8767"}}>
          <div className="Front">
            <h1>Mid Term</h1>
          </div>
          <div className="Back">
            {FileListTwo.map((e)=>(
              <li className="ListStyle" key={e.id}>{e.id}. {e.List}</li>
            ))}
          </div>
        </div>
        <div className="TermStyleFlipMe" style={{'--ColorOfTheBackground':"#0e3887"}}>
          <div className="Front">
            <h1>Long Term</h1>
          </div>
          <div className="Back">
            {FileListThree.map((e)=>(
              <li className="ListStyle" key={e.id}>{e.id}. {e.List}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals