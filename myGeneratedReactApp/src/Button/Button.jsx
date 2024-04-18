import styled from "styled-components";

const StyledButton = styled.button`
  ${props => props.styles}
`;

function Button({ className, onClick, children }) {
    return (
        <button className={className} onClick={onClick}>{children}</button>
    );
}

export default Button;
