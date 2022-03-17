import styled from "styled-components"

const Button = styled.button`
color: black;
background: ${({ includes, color }) =>
  !color ? (includes ? "red" : "green") : color};
border: 0;
height: 30px;
font-size: 16px;
border-radius: 18px;
min-width: 100px;
margin: 0 10px;
cursor: pointer;
text-transform: uppercase;

:hover {
  opacity: 0.8;
}`
export default Button
