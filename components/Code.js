import { useState, useEffect } from 'react'
import Prism from 'prismjs'
import styled from '@emotion/styled'
import Img from './Img'

const Container = styled.section`
  display:flex;
  flex-direction: column;
  width: calc((var(--vw, 1vw) * 100));
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: calc((var(--vw, 1vw) * 100) / -2);
  overflow:hidden;
  min-height:300px;
  justify-content:center;
  align-items:center;
`

const CodeBlock = styled.section`
  box-shadow: 0px 18px 35px 0px rgba(0, 0, 0, 0.5);
  margin:60px 0px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media(max-width: 768px) {
    display: none;
  }
`

const ImageBlock = styled.section`
  display:none;

  @media(max-width: 768px) {
    display:block;
  }
`

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background: ${props => props.color};
  border-radius: 50%;
  margin-right: 10px;
`

const Code = (props) => {
  const [language, setLanguage] = useState('javascript')

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Container>
      <CodeBlock>
        <div className="flex absolute top-4 left-4">
          <Circle color="#ff5f56" />
          <Circle color="#ffbd2e" />
          <Circle color="#27c93f" />
        </div>
        <pre><code className={`language-${language}`}>{props.data[props.content]}</code></pre>
      </CodeBlock>
      <ImageBlock>
        <Img src={props.image} alt="Code block" />
      </ImageBlock>
    </Container>
  )
}

export default Code

