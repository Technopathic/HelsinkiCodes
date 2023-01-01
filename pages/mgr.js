import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { AiFillStar } from 'react-icons/ai'

const spinLeftAnim = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const spinRightAnim = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
`

const spinCircleOneAnim = keyframes`
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(450deg);
    }
`


const spinCircleTwoAnim = keyframes`
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(-540deg);
    }
`


const spinCircleThreeAnim = keyframes`
    0% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(630deg);
    }
`


const spinCircleFourAnim = keyframes`
    0% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-720deg);
    }
`

const centerScale = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

const circleSpreadAnim = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(5);
    }
`

const Main = styled.main`
    width:100vw;
    height:100vh;
    background: rgba(8,6,46,1);
    overflow:hidden;
`

const Section = styled.section`
    width:100%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    //background:repeating-linear-gradient(-65deg, rgba(238, 238, 238, 0.6), rgba(238, 238, 238, 0.6) 200px, rgba(254, 254, 254, 0.6) 200px, rgba(254, 254, 254, 0.6) 400px);
`

const CenterContainer = styled.div`
    width: 920px;
    height: 920px;
    border-radius:50%;
    backdrop-filter: blur(8px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*animation: ${centerScale} 1.5s linear;*/
    animation-fill-mode: both;
`

const CircleOne = styled.div`
    height:900px;
    width:900px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #eb0094;
    border-bottom-color: transparent;
    transform: rotate(90deg);
    animation: ${spinCircleOneAnim} 8s linear .2s;
    position:fixed;
    left: 10px;
    top: 10px;
`

const CircleTwo = styled.div`
    height:870px;
    width:870px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #0fffcb;
    border-bottom-color: transparent;
    transform: rotate(-180deg);
    animation: ${spinCircleTwoAnim} 8s linear .2s;
    position:fixed;
    left: 25px;
    top: 25px;
`

const CircleThree = styled.div`
    height:840px;
    width:840px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #eb0094;
    border-bottom-color: transparent;
    transform: rotate(270deg);
    animation: ${spinCircleThreeAnim} 8s linear .2s;
    position:fixed;
    top: 40px;
    left: 40px;
`

const CircleFour = styled.div`
    height:810px;
    width:810px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #0fffcb;
    border-bottom-color: transparent;
    transform: rotate(-360deg);
    animation: ${spinCircleFourAnim} 8s linear .2s;
    position:fixed;
    top: 55px;
    left: 55px;
`

const CircleFive = styled.div`
    height:780px;
    width:780px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #eb0094;
    border-bottom-color: transparent;
    animation: ${spinLeftAnim} 5s linear .2s infinite;
    position:fixed;
    top: 70px;
    left: 70px;
`

const LeftText = styled.div`
    font-family:Pathway Gothic One;
    color: #222222;
    text-transform:uppercase;
    font-size: 6em;
    transform: rotate(-15deg) skew(-18deg);
    width:550px;   
    line-height:100px;
`

const LargeText = styled.div`
    font-family:Pathway Gothic One;
    color: #222222;
    text-transform:uppercase;
    transform: rotate(-15deg) skew(-18deg);
    width:550px;
    font-size:10em;
    text-align:center;
    line-height:175px;
`

const RightText = styled.div`
    font-family:Pathway Gothic One;
    color: #222222;
    text-transform:uppercase;
    font-size: 6em;
    transform: rotate(-15deg) skew(-18deg);
    width:550px;
    text-align:right;
    line-height:100px;
`

const DividerLine = styled.div`
    height:8px;
    width:550px;
    background: #222222;
    transform: rotate(-15deg) skew(-18deg);
`

const CircleSpread = styled.div`
    height:900px;
    width:900px;
    border-radius: 50%;
    box-sizing: border-box;
    border:30px solid rgba(255, 255, 255, 0.2);
    animation: ${circleSpreadAnim} 1.5s linear 0.75s infinite;
    position:fixed;
`

const CenterImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const Cross = styled.div`
    background: rgba(255, 255, 255, 1);
    height: 90px;
    position: relative;
    width: 10px;
    margin-left: 160px;
    margin-top: 30px;

    &:after {
        background: rgba(255, 255, 255, 1);
        content: "";
        height: 10px;
        left: -40px;
        position: absolute;
        top: 40px;
        width: 90px;
    }
`

const CrossBackground = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    opacity: 0.2;
`

const Bars = styled.div`
    height: 500px;
    width: 500px;
    display: flex;
    align-items: center;
`

const Bar = styled.div`
    height: ${props => props.height}px;
    width: 70px;
    background: #FFFFFF;
    margin: 0px 32px;
    border-radius: 64px;
    background: ${props => props.background || "#FFFFFF"};
`

const Intro = () => {

    const renderCross = (count) => {

        const result = []
        for (let i = 0; i < count; i++) {
            result.push(<Cross />)
        }

        return result
    }

    return (
        <Main>
            {/*<CrossBackground>
                {renderCross(66)}
    </CrossBackground>*/}
            <Section>
                <Bars>
                    <Bar height="100"/>
                    <Bar height="200"/>
                    <Bar height="300" />
                    <Bar height="400" />
                </Bars>
                <CenterContainer>
                    {/*<CircleOne />
                    <CircleTwo />
                    <CircleThree />
<CircleFour />*/}
                    {/*<CircleSpread />*/}
                    {/*<div className="flex fixed top-28">
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '55px', marginRight: '5px', transform: "rotate(45deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '15px', marginRight: '10px', transform: "rotate(45deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ transform: "rotate(360deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '15px', marginLeft: '10px', transform: "rotate(-55deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '55px', marginLeft: '5px', transform: "rotate(-45deg)" }} />
</div>*/}
                    <CenterImage>
                        <img src="/site-images/igdaLogo2.png" />
                    </CenterImage>
                    {/*<div className="flex fixed bottom-28">
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '-20px', marginRight: '10px', transform: "rotate(55deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '15px', marginRight: '10px', transform: "rotate(48deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '30px', transform: "rotate(36deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '15px', marginLeft: '10px', transform: "rotate(-48deg)" }} />
                        <AiFillStar size={80} color="#FFFFFF" style={{ marginTop: '-20px', marginLeft: '10px', transform: "rotate(-55deg)" }} />
</div>*/}

                </CenterContainer>
                <Bars>
                    <Bar height="400" />
                    <Bar height="300" />
                    <Bar height="200" />
                    <Bar height="100" />
                </Bars>
            </Section>
        </Main>
    )
}

export default Intro