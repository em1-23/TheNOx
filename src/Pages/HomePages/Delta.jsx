import React, { useState } from 'react'

function Delta() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [trastCode, setTrastCode] = useState()

  const handel = (e) =>{
    e.target.Default;
  }
  return (
    <div className='Sections Delta' id="OrderOne">
      <span className="Topic">Order One</span>
      <h1 className="SpecialUnderName">Order And Styling Website</h1>
      <div className="FormSection">
        <form>
          <h3>Before You Start To Fill The Inputs Read The Rules </h3>
          <input type="text" className='Box' placeholder="Enter Your Name" />
          <input type="email" className='Box' placeholder="Enter Your Email" />
          <input type="text" className='Box' placeholder="Enter A Code Trust" />
          
        </form>
        <p className="Rules"></p>
      </div>
    </div>
  )
}

export default Delta