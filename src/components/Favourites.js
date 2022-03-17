import React from "react"

import useFavourites from "../hooks/useFavourites"
import useImages from "../hooks/useImages"
import Container from "./Container"
import FavouriteList from "./favourites/FavouriteList"

const Favourites = () => {
  const { favourites, remove } = useFavourites()
  const { images, loaded } = useImages()

  if (!loaded) {
    return <Container>Loading...</Container>
  }

  return (
    <Container>
      <FavouriteList
        favourites={favourites}
        images={images}
        onDelete={remove}
      />
    </Container>
  )
}

export default Favourites
