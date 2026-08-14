import React from 'react'

function Header() {
  return (
    <div className='Header'>
      <h1 className="Name en">Mahmoud Ahmed Elnagar</h1>
      <div className="toDown">
        <input type="checkbox" id="ToDown" />
        <label htmlFor="ToDown" className='LabelForSliderDown'>⩡</label>
      </div>
      <h1 className="Name ar">محمود احمد النجار</h1>
    </div>
  )
}

export default Header