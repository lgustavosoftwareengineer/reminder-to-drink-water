import React from 'react'

import { Button, ButtonsContainer, ButtonPressed } from './styles'

interface ButtonsSectionProps {
  isPlaying: boolean
  start(): void
  stop(): void
  restart(): void
}
const ButtonsSection: React.FC<ButtonsSectionProps> = ({
  isPlaying,
  start,
  stop,
  restart
}) => {
  return (
    <>
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
    </>
  )
}

export default ButtonsSection
