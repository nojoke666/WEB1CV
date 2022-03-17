import FavouriteItem from "./FavouriteItem"

const FavouriteList = ({ favourites, onDelete, images }) => (
  <ul>
    {favourites.map((favourite) => (
      <FavouriteItem
        key={favourite}
        onDelete={() => onDelete(favourite)}
        description={images[favourite].url}
      />
    ))}
  </ul>
)

export default FavouriteList
