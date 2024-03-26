import { combineReducers } from "redux";
import locaitonReducer from "../loactionReducer";

const rootReducer=combineReducers({
    location: locaitonReducer,
})
export default rootReducer;