export const generateYears = (currentYear, length, array) => {
	let newArray = [];
	for (let i = 0; i < length; i++) {
		array.push(currentYear - i);
	}
	return array;
};
