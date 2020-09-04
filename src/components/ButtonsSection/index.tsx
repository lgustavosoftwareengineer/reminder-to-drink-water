import React from 'react'

import {
  GiPauseButton,
  GiPlayButton,
  GiAnticlockwiseRotation
} from 'react-icons/gi'

import Theme from '../../styles/theme'
import { Button, ButtonsContainer, ButtonPressed } from './styles'

interface ButtonsSectionProps {
  isPlaying: boolean
  play(): void
  pause(): void
  restart(): void
  wfir: any
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({
  isPlaying,
  play,
  pause,
  restart,
  wfir
}) => {
  return (
    <>
      {}
      {wfir === 'play' ? (
        <ButtonsContainer>
          <ButtonPressed>
            <GiPlayButton size={25} />
          </ButtonPressed>
          <Button onClick={() => pause()}>
            <p>
              <GiPauseButton size={20} />
            </p>
          </Button>
          <Button onClick={() => restart()}>
            <p>
              <GiAnticlockwiseRotation size={25} />
            </p>
          </Button>
        </ButtonsContainer>
      ) : wfir === 'pause' ? (
        <ButtonsContainer>
          <Button onClick={() => play()}>
            <p>
              <GiPlayButton size={25} />
            </p>
          </Button>
          <ButtonPressed onClick={() => pause()}>
            <p>
              <GiPauseButton size={20} />
            </p>
          </ButtonPressed>
          <Button onClick={() => restart()}>
            <p>
              <GiAnticlockwiseRotation size={24} />
            </p>
          </Button>
        </ButtonsContainer>
      ) : wfir === 'restart' ? (
        <ButtonsContainer>
          <Button onClick={() => play()}>
            <p>
              <GiPlayButton size={25} />
            </p>
          </Button>
          <Button onClick={() => pause()}>
            <p>
              <GiPauseButton size={20} />
            </p>
          </Button>
          <ButtonPressed onClick={() => restart()}>
            <p>
              <GiAnticlockwiseRotation size={24} />
            </p>
          </ButtonPressed>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <Button onClick={() => play()}>
            <p>
              <GiPlayButton size={25} />
            </p>
          </Button>
          <Button onClick={() => pause()}>
            <p>
              <GiPauseButton size={20} />
            </p>
          </Button>
          <Button onClick={() => restart()}>
            <p>
              <GiAnticlockwiseRotation size={24} />
            </p>
          </Button>
        </ButtonsContainer>
      )}
    </>
  )
}

export default ButtonsSection
