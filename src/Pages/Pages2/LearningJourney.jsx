import React from 'react'

function LearningJourney() {
  function JourneyPin(Nox){
    let RightVar = Nox.Right
    let TopVar = Nox.Top
    return(
      <div className="JourneyPin" style={{top:TopVar ,right:RightVar}}>
        <div className="Years">
          2024
        </div>
        <div className="ThePlot">
          <h2 className="TheObjectInTheYear">Html & Css</h2>
          <div className="Done">Ended In 2 Days</div>
          <a href="" target='_blank' className="YoutubeLink">▶ Youtube</a>
          <button className="Button Outline">See The Projects</button>
        </div>
      </div>
    )
  }
  return (
    <div className='Section LearningJourney'>
      <h1>Learning Journey</h1>
      <img src="/IMgs/J.png" alt="RoadMap" />
      <JourneyPin Right="78%" Top="73%" />
    </div>
  )
}

export default LearningJourney