import { combineReducers } from "redux";
import Addtocart__reducer from "./Reducer";
const CombRed =combineReducers(
    {
    object:Addtocart__reducer
    }
)
export default CombRed