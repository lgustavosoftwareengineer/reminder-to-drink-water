import { createContext } from 'react'

interface StartMinuteContextProps {
  startMinuteContext: number
  handlerDefiningTheStartMinuteContext(value: number)
}

const StartMinuteContext = createContext<StartMinuteContextProps>({
  startMinuteContext: 0,
  handlerDefiningTheStartMinuteContext: () => null
})

export default StartMinuteContext
