import React, { useEffect } from "react"

import Navigation from "./header/Navigation"
import Row from "./header/Row"
import Link from "./header/Link"

import LogoImage from "./header/LogoImage"
import {useLocation} from "react-router-dom"


const Header = () =>{
  let location=useLocation();

    useEffect(() =>{
      
      console.log(location);
    }, [])

    
return(
  
  <Navigation>

    <Row>
    <Link to="/"> <LogoImage url="https://c.tenor.com/nEF800vPQh8AAAAC/naruto-run-peepo.gif" /> </Link>
     <Link to="/">Home</Link>
      
     

      <Link to="/gallery">Gallery</Link>
      {location.pathname == "/gallery" && <Link to="/favourites">Favourites</Link>}
      
    </Row>
  </Navigation>
  );

}
export default Header
