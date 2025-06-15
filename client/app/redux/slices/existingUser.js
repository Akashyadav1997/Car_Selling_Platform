const { createSlice } = require("@reduxjs/toolkit");

const existingUserSlice = createSlice({
	name: "existingUser",
	initialState: {
		userId: "",
		requestedCarDetails: [],
	},
	reducers: {
		updateUserId: (state, action) => {
			state.userId = action.payload;
		},
		updateRequestedCarDetails: (state, action) => {
			state.requestedCarDetails = action.payload;
		},
	},
});

export const { updateUserId, updateRequestedCarDetails } =
	existingUserSlice.actions;
export default existingUserSlice.reducer;
