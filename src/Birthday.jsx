import React from 'react'

function Birthday() {
  let time = new Date()
  let day = time.getDate()
  let month = time.getMonth() + 1
  let year = time.getFullYear()
  const isBirthday = (month === 9 && day === 1)
  return (
    <>
      {isBirthday &&
      <div className='BirthMassage'>
        <h1>Happy BirthDay For Me</h1>
        <h4>It's My {year - 2009} </h4>
        <h3>I'm In Vacation For 1 Day If You Need SomeThing </h3>
        <a target='_blank' href="https://wa.me/+201027680112">Click Me</a>
      </div>
      }
    </>
  )
}

export default Birthday