import styled from 'styled-components'

export const StyledButton = styled.button`
background: red;
width: 50px;
height: 200px;
color: green;
border: 2px aqua;
position: absolute;
top: 30px;
right: 300px;
`

export const htmlButotn = <StyledButton>test</StyledButton>

function Button() {
    return <>{htmlButotn}</>
}

export default Button;