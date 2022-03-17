import { useContext } from "react"
import { ImagesContext } from "../utils/ImagesContext"

const useImages = () => {
  const context = useContext(ImagesContext)
  return context
}

export default useImages
