import styled from "styled-components";

const StyledSection = styled.section`
  ${props => props.styles}
`;

function Section({ className, onClick, children }) {
    return (
        <section className={className} onClick={onClick}>{children}</section>
    );
}

export default Section;
