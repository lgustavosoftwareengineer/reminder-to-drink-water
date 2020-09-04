import styled from 'styled-components'

export const Button = styled.a`
  p {
    display: flex;
    color: #fff;
    background: rgba(29, 26, 26, 0);
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    min-width: 6rem;
    border-radius: 10px;
    text-decoration-line: none;
    justify-content: center;
    margin: 0 1rem;
  }

  p:focus {
    outline: none;
  }

  p:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.primary};
    transition: all 0.2s ease;
    border-radius: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ButtonPressed = styled.p`
  cursor: pointer;
  color: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.primary};
  transition: all 0.2s ease;
  border-radius: 20px;
  display: flex;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  min-width: 6rem;
  border: 2px solid #fff;
  outline-color: #fff;
  border-style: solid;
  text-decoration-line: none;
  justify-content: center;
  margin: 0 1rem;
`
