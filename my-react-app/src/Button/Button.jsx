import styled from "styled-components";

const StyledButton = styled.button`
  ${props => props.styles}
`;

function Button({ styles, onClick, children }) {
    return (
        <StyledButton styles={styles} onClick={onClick} >
            {children}
        </StyledButton>
    );
}

export default Button;
