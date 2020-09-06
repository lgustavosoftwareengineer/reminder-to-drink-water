import { createContext } from 'react'

interface Props {
  startMinuteContext: number
  handlerDefiningTheStartMinuteContext()
}

const StartMinuteContext = createContext<Props>({})

export default StartMinuteContext
