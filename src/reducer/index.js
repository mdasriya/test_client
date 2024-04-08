import { combineReducers } from "@reduxjs/toolkit"
import cartReducer from "../slices/cartSlice"
import authReducer from "../slices/authSlice"
import useReducer from "../slices/userSlice"

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  user: useReducer
})

export default rootReducer
