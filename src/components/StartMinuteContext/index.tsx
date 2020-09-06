import { createContext } from 'react'

interface StartMinuteContextProps {
  startMinuteContext: number
  handlerDefiningTheStartMinuteContext(value: number)
}

const StartMinuteContext = createContext<StartMinuteContextProps>({})

export default StartMinuteContext
