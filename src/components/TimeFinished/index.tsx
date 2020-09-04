import React from 'react'

import ReactHowler from 'react-howler'

interface TimeFinished {
  time: number
}

const TimeFinished: React.FC<TimeFinished> = ({ time }) => {
  return (
    <>
      {time <= 0 && (
        <div>
          <h1>Água na sua garganta agora! 🌊</h1>
          <ReactHowler
            src="http://soundbible.com/mp3/pour_glass_water-Mike-Koenig-123.mp3"
            playing={true}
            volume={0.1}
          />
        </div>
      )}
    </>
  )
}

export default TimeFinished
