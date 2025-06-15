const { combineReducers } = require("@reduxjs/toolkit");
import newUserReducer from "./newUser";
import existingUserReducer from "./existingUser";

const rootReducer = combineReducers({
	newUser: newUserReducer,
	existingUser: existingUserReducer,
});

export default rootReducer;
