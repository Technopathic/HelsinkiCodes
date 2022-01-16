import styled from '@emotion/styled'

const Container = styled.p`
    color: #7C838D;
    line-height: 1.9em;
    font-size: 18px;
`

const Subtitle = ({ children, ...rest }) => (
    <Container {...rest}>{children}</Container>
)

export default Subtitle