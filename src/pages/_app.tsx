import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { Header } from '../styles/pages/App'
import theme from '../styles/themes/defaultTheme'
import lightTheme from '../styles/themes/lightTheme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [themeAlternator, setThemeAlternator] = React.useState(false)
  return (
    <ThemeProvider theme={themeAlternator ? theme : lightTheme}>
      <Header>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setThemeAlternator(!themeAlternator)}
          />

          <span className="slider round"></span>
        </label>
      </Header>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
