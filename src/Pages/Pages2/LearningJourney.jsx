import React from 'react'

function LearningJourney() {
  function JourneyCard(Nox){
    const Color = `green`
    return(
      <div className="JourneyCard">
        <div className="TimeOfYeaer" style={{backgroundColor:Color}}>2024</div>
        <h2 className="Name">Html & Css</h2>
        <span className="TimeToTake">Time Taken To Done <span className="Days"> 2 days</span></span>
        <div className="MoreAboutTheJourney">
          <div className="MyFirstWebsites"></div>
          <a target='_blank' href="https://youtu.be/q3yFo-t1ykw" className="Youtube">▶</a>
        </div>
      </div>
    )
  }
  
  return (
    <div className='Section LearningJourney'>
      <h1 className="Arabic">محمود احمد النجار</h1>
      <h3 className="English">Mahmoud Ahmed Elnagar</h3>
      <div className="TheJourney">
        <JourneyCard />
      </div>
    </div>
  )
}

export default LearningJourney