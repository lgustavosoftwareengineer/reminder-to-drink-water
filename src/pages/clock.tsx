import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import ReactHowler from 'react-howler'

import {
  Container,
  ClockContainer,
  ClockTime,
  Button,
  ButtonsContainer,
  ButtonPressed
} from '../styles/pages/Clock'
const Clock: React.FC = () => {
  const [startMinute, setStartMinute] = React.useState(0.2)
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

      <ClockContainer>
        <h1>
          Falta{' '}
          <ClockTime>
            {minutes}:{seconds}
          </ClockTime>{' '}
          para a água descer
        </h1>
      </ClockContainer>
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
      {/* <ReactPlayer playing={false} url={musicUrl} /> */}

      {isPlaying ? (
        <ButtonsContainer>
          <ButtonPressed>Start</ButtonPressed>
          <ButtonPressed onClick={() => stop()}>
            <p>Pause</p>
          </ButtonPressed>
          <ButtonPressed onClick={() => restart()}>
            <p>Restart</p>
          </ButtonPressed>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <Button onClick={() => start()}>
            <p>Start</p>
          </Button>
          <Button onClick={() => stop()}>
            <p>Pause</p>
          </Button>
          <Button onClick={() => restart()}>
            <p>Restart</p>
          </Button>
        </ButtonsContainer>
      )}
    </Container>
  )
}

export default Clock
