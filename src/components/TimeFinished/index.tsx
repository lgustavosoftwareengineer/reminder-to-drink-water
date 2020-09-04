import React from 'react'
import Head from 'next/head'

import ReactHowler from 'react-howler'
import waterGlassFavicon from '../../assets/favicons/water-glass.ico'

interface TimeFinished {
  time: number
  isPlaying: boolean
}

const TimeFinished: React.FC<TimeFinished> = ({ time, isPlaying }) => {
  return (
    <>
      {time <= 0 && (
        <div>
          <Head>
            <link rel="shortcut icon" href={waterGlassFavicon} />
          </Head>
          <h1>Água na sua garganta agora! 🚰</h1>
          <ReactHowler
            src="http://soundbible.com/mp3/pour_glass_water-Mike-Koenig-123.mp3"
            playing={isPlaying}
            volume={0.1}
          />
        </div>
      )}
    </>
  )
}

export default TimeFinished
