import styled from "styled-components"

const Image = styled.div`
  width: 40%;
  padding-top: 40%;
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
    width: 100%;
    max-width: 500px;
    height: auto;
  }
  
`

export default Image
