import styled from 'styled-components'

export const Button = styled.a`
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.primary};
    background: rgba(29, 26, 26, 0);
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 20px;
    outline-color: ${props => props.theme.colors.primary};
    border-style: solid;
    text-decoration-line: none;

    margin: 0 1rem;
  }

  p:focus {
    outline: none;
  }

  p:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.primary};
    transition: all 0.8s ease;
    border-radius: 40px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 15px 0;
  p {
    font-size: 1rem;
  }
`
export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.primary};
    margin: 30px;
    text-align: center;
  }

  @media (min-width: 600px) {
    ${Button}, ${ButtonsContainer} {
      align-self: center;
    }

    ${Button} > p {
      height: 4rem;
    }
  }
`
