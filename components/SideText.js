import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const MoveDown = keyframes`
    from {
      opacity: 0.1;
        transform: translateY(-100vh);
    }
    to {
      opacity: 0.1;
      transform: translateY(100vh);
    }
`

const MoveUp = keyframes`
    from {
      opacity: 0.1;
        transform: translateY(120vh);
    }
    to {
      opacity: 0.1;
      transform: translateY(-120vh);
    }
`

const Container = styled.div`
    text-transform: uppercase;
    position: fixed;
    font-size: 16rem;
    font-family: 'gothic-regular';
    top: ${props => props.direction === 'left' ? '0' : 'auto'};
    bottom: ${props => props.direction === 'right' ? '0' : 'auto'};
    left: ${props => props.direction === 'left' ? '0' : 'auto'};
    right: ${props => props.direction === 'right' ? '0' : 'auto'};
    margin:0;
    padding:0;
    width: 250px;
    color: #31475e;
    height: 100vh;
    opacity: 0;
    animation: ${props => props.move === 'down' ? MoveDown : MoveUp} ${props => props.time}s linear infinite;
    animation-delay: ${props => props.delay}s;
    z-index: -1;

    div {
        transform: ${props => props.direction === 'left' ? 'rotate(90deg)' : 'rotate(-90deg)'};
    }

    @media(max-width: 425px) {
      display: none;
    }
`

const SideText = (props) => (
  <Container direction={props.direction} move={props.move} time={props.time} delay={props.delay}><div direction={props.direction}>{props.text}</div></Container>
)

export default SideText