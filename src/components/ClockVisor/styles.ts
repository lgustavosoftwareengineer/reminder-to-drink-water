import styled from 'styled-components'

export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  border-radius: 100%;
  border: solid 2px #fff;
  min-height: 200px;
  width: 200px;
  margin-bottom: 20px;
`
export const ClockTime = styled.span`
  font-weight: bold;
  margin: 20px 0 -20px;
  color: ${props => props.theme.colors.text};
`
