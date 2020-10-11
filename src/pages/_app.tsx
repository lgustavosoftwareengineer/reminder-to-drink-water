import React from '../contexts/StartMinuteContext/node_modules/react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import StartMinuteContext from '../contexts/StartMinuteContext'

import GlobalStyle from '../styles/global'
import { Header } from '../styles/pages/App'
import theme from '../styles/themes/defaultTheme'
import lightTheme from '../styles/themes/lightTheme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [themeAlternator, setThemeAlternator] = React.useState(false)
  const [startMinuteContext, setStartMinuteContext] = React.useState(30)
  function handlerDefiningTheStartMinuteContext(value: number) {
    setStartMinuteContext(value)
  }

  return (
    <ThemeProvider theme={themeAlternator ? theme : lightTheme}>
      <StartMinuteContext.Provider
        value={{ startMinuteContext, handlerDefiningTheStartMinuteContext }}
      >
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
      </StartMinuteContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
