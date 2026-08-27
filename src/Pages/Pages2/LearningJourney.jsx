import React from 'react'

function LearningJourney() {
  function JourneyPin(){
    return(
      <div className="JourneyPin">
        <div className="Years">
          2024
        </div>
        <div className="ThePlot">
          <h2 className="TheObjectInTheYear">Html & Css</h2>
          <div className="Done">Ended In 2 Days</div>
          <a href="" className="YoutubeLink">Youtube</a>
          <p className="Description">
            I Started As A Html Dev From The Bottom
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className='Section LearningJourney'>
      <img src="/IMgs/J.png" alt="RoadMap" />
      <JourneyPin />
    </div>
  )
}

export default LearningJourney