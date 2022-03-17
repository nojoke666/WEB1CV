import styled from "styled-components"

const LogoImage = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  background: url(${({ url }) => url});
  background-size: cover;
  
  background-repeat: no-repeat;
  border-radius: 50%;
  justify-content: inherit;
`

export default LogoImage
