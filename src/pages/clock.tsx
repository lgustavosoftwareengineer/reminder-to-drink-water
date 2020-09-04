import React from 'react'
import Head from 'next/head'

import moment from 'moment'
import clockFavicon from '../assets/favicons/clock.ico'

import Theme from '../styles/theme'
import ClockVisor from '../components/ClockVisor'
import ButtonsSection from '../components/ButtonsSection'
import TimeFinished from '../components/TimeFinished'

import { Container } from '../styles/pages/Clock'

const Clock: React.FC = () => {
  const [startMinute, setStartMinute] = React.useState(0.2)
  const [time, setTime] = React.useState(startMinute * 60)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [
    whichFunctionalityIsRunning,
    setWhichFunctionalityIsRunning
  ] = React.useState('')
  const [clockTime, setClockTime] = React.useState(moment().format('LT'))

  function updateCountdown() {
    setMinutes(Math.floor(time / 60))
    setSeconds(time % 60)
    setTime(time - 1)
  }

  function updateClockTime() {
    setClockTime(moment().format('LT'))
  }

  // eslint-disable-next-line no-unused-expressions
  isPlaying ? setTimeout(updateCountdown, 1000) : () => reset()

  function play() {
    setIsPlaying(true)
    setWhichFunctionalityIsRunning('play')
  }

  function pause() {
    setIsPlaying(false)
    setWhichFunctionalityIsRunning('pause')
  }

  function restart() {
    setTime(startMinute * 60)
    setIsPlaying(true)
    setWhichFunctionalityIsRunning('restart')
  }

  function reset() {
    setTime(startMinute * 60)
  }

  React.useEffect(() => {
    time <= 0 && pause()
    const interval = setInterval(() => {
      updateClockTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
    <Container>
      <Head>
        <title>O relógio esta ...</title>
        <link rel="shortcut icon" href={clockFavicon} />
      </Head>

      <div>
        <h1 style={{ color: Theme.colors.primary }}>{clockTime}</h1>
      </div>

      <ClockVisor minutes={minutes} seconds={seconds} />

      <TimeFinished time={time} isPlaying={true} />

      <ButtonsSection
        isPlaying={isPlaying}
        play={play}
        pause={pause}
        restart={restart}
        wfir={whichFunctionalityIsRunning}
      />
    </Container>
  )
}

export default Clock
