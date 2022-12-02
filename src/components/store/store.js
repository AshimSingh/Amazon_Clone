import { createStore } from "redux";
import Addtocart__reducer from "./Reducer"
import  CombRed  from "./combineReducer";
const store =createStore(
    CombRed
)
export default store