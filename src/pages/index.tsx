import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import logo from '../assets/logo.png'
import waterDropFavicon from '../assets/favicons/water-drop.ico'

import { Container, Button } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href={waterDropFavicon} />
      </Head>
      <Container>
        <p>
          <img src={logo} alt="" width={150} />
        </p>
        <h1>Irei lembrar você de beber água</h1>
        <Link href="/clock">
          <Button>
            <p>Clique aqui para começar o contador</p>
          </Button>
        </Link>
      </Container>
    </>
  )
}

export default Home
