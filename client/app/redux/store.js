const { configureStore } = require("@reduxjs/toolkit");
import rootReducer from "./slices";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== "production",
});
