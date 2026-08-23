import React from 'react'
import Nox from './Nox'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Header'>
      <h1>{"</>"} NoxCode</h1>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Experiance">Experiance</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#OrderOne">Need Website</a></li>
        <li><a href="#Social">Social</a></li>
      </ul>
      <Link to="/Hire" className='Button'>Hire Me</Link>
    </div>
  )
}

export default Header