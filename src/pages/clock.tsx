import React, { useState, useContext } from 'react'
import Head from 'next/head'
import StartMinuteContext from '../components/StartMinuteContext'

import moment from 'moment'
import clockFavicon from '../assets/favicons/clock.ico'

import ClockVisor from '../components/ClockVisor'
import ButtonsSection from '../components/ButtonsSection'
import TimeFinished from '../components/TimeFinished'

import { ThemeContext } from 'styled-components'
import { Container } from '../styles/pages/Clock'
const Clock: React.FC = () => {
  // Contexts
  const themeContext = useContext(ThemeContext)
  const { startMinuteContext } = useContext(StartMinuteContext)

  // States
  const [time, setTime] = useState(Number(startMinuteContext) * 60)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [
    whichFunctionalityIsRunning,
    setWhichFunctionalityIsRunning
  ] = useState('')
  const [clockTime, setClockTime] = useState(moment().format('LT'))

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
    setTime(startMinuteContext * 60)
    setIsPlaying(true)
    setWhichFunctionalityIsRunning('restart')
  }

  function reset() {
    setTime(startMinuteContext * 60)
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
        <h1 style={{ color: themeContext.colors.primary }}>{clockTime}</h1>
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
