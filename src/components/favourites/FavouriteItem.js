import React from "react"

const FavouriteItem = ({ description, onDelete }) => (
  <li>
    {description}
    <button onClick={onDelete}>x</button>
  </li>
)

export default FavouriteItem
