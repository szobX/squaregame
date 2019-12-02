const colors = [ '#244B59', '#41B3A3', '#7Fc7BB', '#F7b733', '#EEAA7B' ];

export const randomColor = () => {
	return colors[Math.floor(Math.random() * colors.length)];
};

const RenderSquares = () => {
	const obj = [];
	for (let x = 1; x < 7; x++) {
		for (let y = 1; y < 11; y++) {
			obj.push({ x: x, y: y, id: `${x}${y}`, color: randomColor() });
		}
	}
	return obj;
};

export default RenderSquares;
