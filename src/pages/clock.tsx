import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import ClockVisor from '../components/ClockVisor'
import ButtonsSection from '../components/ButtonsSection'
import TimeFinished from '../components/TimeFinished'

import {
  Container,
  ClockContainer,
  ClockTime,
  Button,
  ButtonsContainer,
  ButtonPressed
} from '../styles/pages/Clock'
const Clock: React.FC = () => {
  const [startMinute, setStartMinute] = React.useState(1)
  const [time, setTime] = React.useState(startMinute * 60)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)

  function updateCountdown() {
    setMinutes(Math.floor(time / 60))
    setSeconds(time % 60)
    setTime(time - 1)
  }
  // eslint-disable-next-line no-unused-expressions
  isPlaying ? setTimeout(updateCountdown, 1000) : () => reset()

  function start() {
    setIsPlaying(true)
  }

  function stop() {
    setIsPlaying(false)
  }

  function restart() {
    setTime(startMinute * 60)
    setIsPlaying(true)
  }

  function reset() {
    setTime(startMinute * 60)
  }

  React.useEffect(() => {
    time <= 0 && stop()
  }, [time])

  return (
    <Container>
      <Head>
        <title>O relógio esta ...</title>
      </Head>

      <ClockVisor minutes={minutes} seconds={seconds} />

      <TimeFinished time={time} />

      <ButtonsSection
        isPlaying={isPlaying}
        start={start}
        stop={stop}
        restart={restart}
      />
    </Container>
  )
}

export default Clock
