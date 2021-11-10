import { combineReducers } from "redux";
import { stateName as restaurant, reducer as RestaurantReducer } from "./Restaurant"
import { stateName as food, reducer as FoodReducer } from "./Food"
import { stateName as categories, reducer as CategoryReducer } from "./Categories"
import { stateName as orders, reducer as OrderReducer } from "./Order"
import { stateName as user, reducer as UserReducer } from "./User"
import { stateName as review, reducer as ReviewReducer } from "./Review"
import AuthReducer, { stateName as auth } from "./Auth"
import BufferReducer, { stateName as buffer } from "./Buffer"

export default combineReducers({
  [auth]: AuthReducer,
  [buffer]: BufferReducer,
  [restaurant]: RestaurantReducer,
  [food]: FoodReducer,
  [categories]: CategoryReducer,
  [orders]: OrderReducer,
  [user]: UserReducer,
  [review]: ReviewReducer
})