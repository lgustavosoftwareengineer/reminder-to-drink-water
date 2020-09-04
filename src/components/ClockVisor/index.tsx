import React from 'react'

import { ClockContainer, ClockTime } from './styles'

interface ClockVisorProps {
  minutes: number | string
  seconds: number | string
}

const ClockVisor: React.FC<ClockVisorProps> = ({ minutes, seconds }) => {
  return (
    <ClockContainer>
      {minutes <= 0 ? (
        <ClockTime>{seconds < 10 ? `0${seconds}s` : `${seconds}s`}</ClockTime>
      ) : (
        <ClockTime>
          {minutes < 10
            ? `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
            : `${minutes}:${seconds}`}
        </ClockTime>
      )}
      <h1>Para a água descer</h1>
    </ClockContainer>
  )
}

export default ClockVisor
