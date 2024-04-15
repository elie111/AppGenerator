import styled from 'styled-components'

export const StyledSection = styled.section`
background: black;
width: 50px;
height: 200px;
color: white;
position: absolute;
top: 50px;
right: 100px;
`

export const htmlSection = <StyledSection>test</StyledSection>

function Section() {
    return <>{htmlSection}</>
}

export default Section;