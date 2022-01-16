import styled from '@emotion/styled'

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 18px 32px;
    display:flex;
    justify-content: space-between;
    background: #FFFFFF;
    position: fixed;
    bottom:24px;
    left:0;
    right:0;
    margin:0 auto;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    align-items:center;
`

const CookieInfo = styled.div`
    display:flex;
    flex-direction:column;

    h4, p {
        margin:0;
    }

    h4 {
        font-size: 18px;
    }

    p {
        font-size: 15px;
    }
`

const CookieButton = styled.div``

const CookieConsent = (props) => (
    <Container>
        <CookieInfo>
            <h4>We need your consent</h4>
            <p>We use cookies on this website to make your browsing experience better. By using the site you agree to our use of cookies. Learn more</p>
        </CookieInfo>
        <CookieButton>
            <div onClick={props.acceptCookie}>OK</div>
        </CookieButton>
    </Container>
)

export default CookieConsent