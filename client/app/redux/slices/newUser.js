const { createSlice } = require("@reduxjs/toolkit");

const newUserSlice = createSlice({
	name: "newUser",
	initialState: {
		inputValues: [],
		currentSteps: 0,
		submissionValues: {
			brand: "",
			location: "",
			manufacturingYear: "",
			model: "",
			fuelType: "",
			transmissionType: "",
			variant: "",
			ownershipHistory: "",
			kilometer: "",
			sellingTime: "",
			email: "",
			carNumber: "",
		},
	},
	reducers: {
		// updateInputValues: (state, action) => {
		// 	state.inputValues.push(action.payload);
		// },
		updateInputValues: (state, action) => {
			const { index, value } = action.payload;
			if (index >= 0 && index < state.inputValues.length) {
				state.inputValues[index] = value;
			} else if (index === state.inputValues.length) {
				state.inputValues.push(value);
			}
		},
		increaseCurrentSteps: (state, action) => {
			state.currentSteps = action.payload.value;
		},
		decreaseCurrentSteps: (state, action) => {
			if (state.currentSteps <= 1) return;
			state.currentSteps -= 1;
		},
		updateSubmissionValues: (state, action) => {
			const { name, value } = action.payload;
			state.submissionValues[name] = value;
		}
	},
});

export const { updateInputValues, increaseCurrentSteps, decreaseCurrentSteps, updateSubmissionValues } =
	newUserSlice.actions;
export default newUserSlice.reducer;
