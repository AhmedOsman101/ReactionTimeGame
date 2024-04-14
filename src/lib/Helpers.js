export const getRandomInt = (min, max) => {
	min = Math.ceil(min); // Round up the minimum value
	max = Math.floor(max); // Round down the maximum value
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const evaluateScore = (score) => {
	if (score <= 200) return "Excellent";
	if (score <= 300) return "Very Good";
	if (score <= 400) return "Good";
	if (score <= 500) return "Average";
	if (score <= 700) return "Below Average";
	if (score <= 1000) return "Poor";
	else return "Very Poor";
};
