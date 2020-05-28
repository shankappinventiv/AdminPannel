import { combineReducers } from "redux";
import counterReducer from "../screens/signUp/reducer"


/**
 * combine all reducer into single root reducer
 */
const rootReducer = combineReducers({
    counterReducer
});

export default rootReducer;
