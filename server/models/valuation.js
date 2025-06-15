import mongoose from "mongoose";

const Schema = mongoose.Schema;

const valuation = new Schema(
	{
		brand: {
			type: String,
			required: true,
		},
		carNumber: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		fuelType: {
			type: String,
			required: true,
		},
		kilometer: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		manufacturingYear: {
			type: String,
			required: true,
		},
		model: {
			type: String,
			required: true,
		},
		ownershipHistory: {
			type: String,
			required: true,
		},
		sellingTime: {
			type: String,
			required: true,
		},
		transmissionType: {
			type: String,
			required: true,
		},
		variant: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
export const ValuationForm = mongoose.model("ValuationForm", valuation);
