import React from "react"
import { css } from "styled-components/macro"
import Header from "./Header"
import Image from "./Image"
import Button from "./Button"
import Row from "./header/Row"
import Container from "./Container"
import useFavourites from "../hooks/useFavourites"
import useImages from "../hooks/useImages"
import Navigation from "./header/Navigation"
import Link from "./header/Link"
import styled from "styled-components"

const Gallery = () => {
  const { add, favourites, remove } = useFavourites()
  const { images, next, prev, index, loaded } = useImages()

  if (!loaded) {
    return <Container>Loading...</Container>
  }

  return (
    <Container>
      <Image
        src={images[index].url}
        alt={images[index].url}
      />
      <Row
      
        css={css`
          margin-top: 10px;
        `}
       
    > 

      
        <Button color="purple" onClick={prev}>
          Previous
        </Button>
        {favourites.includes(index) ? (
          <Button
            includes={favourites.includes(index)}
            onClick={() => remove(index)}
          >
            Unfavourite
          </Button>
        ) : (
          <Button
            includes={favourites.includes(index)}
            onClick={() => add(index)}
          >
            Favourite
          </Button>
        )}
        
        <Button color="purple" onClick={next}>
          Next
        </Button>
      </Row>
    </Container>
  )
}

export default Gallery
