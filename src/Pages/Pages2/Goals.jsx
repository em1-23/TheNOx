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
        <div className="ShortTerm TermStyle">
          <h1>Short Term</h1>
          {FileListOne.map((e)=>(
            <li className="ListStyle" key={e.id}>{e.id}. {e.List}</li>
          ))}
        </div>
        <div className="MidTerm TermStyle" style={{borderColor:"#0e8767"}}>
          <h1>Mid Term</h1>
          {FileListTwo.map((e)=>(
            <li className="ListStyle" key={e.id}>{e.id}. {e.List}</li>
          ))}
        </div>
        <div className="LongTerm TermStyle" style={{borderColor:"#0f4d72"}}>
          <h1>Long Term</h1>
          {FileListThree.map((e)=>(
            <li className="ListStyle" key={e.id}>{e.id}. {e.List}</li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goals