import { generateArray, types, tags } from "../../helpers/Generator"
import Image from "../../assets/images/burger.jpg"

const props = {
  id: {
    type: types.string, tag: tags.id
  },
  title: {
    type: types.string
  },
  image: {
    type: types.fixed,
    payload: Image
  },
  restaurantID: {
    type: types.string
  },
  description: {
    type: types.string
  },
  categoryID: {
    type: types.string
  },
  price: {
    type: types.number,
    digit: 2
  },
}

export default () => {
  const fetchedData = generateArray(16, props)
  return fetchedData.slice(0, 10)
}