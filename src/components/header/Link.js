import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(NavLink)`
  padding: 0 8px;
  color: purple;
  text-decoration: none;
  display: flex;
  align-items:center ;
  &:hover {
  color: white;
  }
  
  
`

const Link = (props) => (
  <StyledLink {...props} exact activeStyle={{ fontWeight: "bold" }} />
)

export default Link
