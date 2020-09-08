import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import StartMinuteContext from '../components/StartMinuteContext'
import { ThemeContext } from 'styled-components'

import logo from '../assets/logo.png'
import waterDropFavicon from '../assets/favicons/water-drop.ico'

import { Container, Button, ButtonsContainer } from '../styles/pages/Home'

const Home: React.FC = () => {
  const themeContext = React.useContext(ThemeContext)
  const [
    twentyMinutesStartMinute,
    setTwentyMinutesStartMinute
  ] = React.useState(false)
  const [
    thirtyMinutesStartMinute,
    setThirtyMinutesStartMinute
  ] = React.useState(false)
  const {
    startMinuteContext,
    handlerDefiningTheStartMinuteContext
  } = React.useContext(StartMinuteContext)
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href={waterDropFavicon} />
      </Head>
      <Container>
        <h1>Olá, eu irei lembrar você de beber água!</h1>
        <p>
          <img src={logo} alt="" width={150} />
        </p>
        <h1>
          De quanto em quanto minutos você quer ser lembrado de beber água?
        </h1>
        <Link href="/clock">
          <ButtonsContainer>
            <Button
              onClick={() => {
                handlerDefiningTheStartMinuteContext(20)
                setTwentyMinutesStartMinute(!twentyMinutesStartMinute)
              }}
            >
              <p
                style={{
                  backgroundColor: twentyMinutesStartMinute
                    ? themeContext.colors.primary
                    : null,
                  color: twentyMinutesStartMinute
                    ? themeContext.colors.background
                    : null
                }}
              >
                20 minutos
              </p>
            </Button>
            <Button
              onClick={() => {
                handlerDefiningTheStartMinuteContext(30)
                setThirtyMinutesStartMinute(!thirtyMinutesStartMinute)
              }}
            >
              <p
                style={{
                  backgroundColor: thirtyMinutesStartMinute
                    ? themeContext.colors.primary
                    : null,
                  color: thirtyMinutesStartMinute
                    ? themeContext.colors.background
                    : null
                }}
              >
                30 minutos
              </p>
            </Button>
          </ButtonsContainer>
        </Link>
      </Container>
    </>
  )
}

export default Home
