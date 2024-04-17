import styled from "styled-components";

const StyledSection = styled.section`
  ${props => props.styles}
`;

function Section({ styles, onClick, children }) {
    return (
        <StyledSection styles={styles} onClick={onClick} >
            {children}
        </StyledSection>
    );
}

export default Section;
