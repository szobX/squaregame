const colors = [ '#D3AD5C', '#6693DD', '#6F2168', '#366EEE' ];

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
