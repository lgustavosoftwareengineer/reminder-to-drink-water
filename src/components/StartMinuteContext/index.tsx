import { createContext } from 'react'

interface Props {
  startMinuteContext: number
  handlerDefiningTheStartMinuteContext(value: number)
}

const StartMinuteContext = createContext<Props>({})

export default StartMinuteContext
