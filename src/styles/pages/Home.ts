import styled from 'styled-components'

export const Button = styled.a`
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: rgba(29, 26, 26, 0);
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    border: 2px solid #fff;
    border-radius: 10px;
    outline-color: #fff;
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
    border-radius: 20px;
  }
`
export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.primary};
    margin: 30px;
    text-align: center;
  }

  @media (min-width: 600px) {
    ${Button} {
      align-self: center;
    }

    ${Button} > p {
      height: 4rem;
    }
  }
`
