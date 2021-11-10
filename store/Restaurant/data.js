import { generateArray, types, tags } from "../../helpers/Generator"
import Image from "../../assets/images/Restaurants/RestaurantThree.jpg"

const props = {
  _id: {
    type: types.string, tag: tags.id
  },
  name: {
    type: types.string
  },
  location: {
    type: types.string
  },
  image: {
    type: types.fixed,
    payload: Image
  },
}

export const restaurants = () => {
  const fetchedData = generateArray(16, props)
  return {
    count: fetchedData.length,
    results: fetchedData.slice(0, 5)
  }
}