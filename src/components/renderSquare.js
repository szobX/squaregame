const colors = [ '#244B59', '#41B3A3', '#7Fc7BB', '#F7b733', '#EEAA7B' ];


export const randomColor = () => {
	return colors[Math.floor(Math.random() * colors.length)];
};

const RenderSquares = (x,y) => {
	const obj = [];
	for (let i = 1; i<=x; i++) {
		for (let j = 1; j <=y; j++) {
			obj.push({ x: i, y: j, id: `${i}${j}`, color: randomColor() });
		}
	}
	return obj;
};

export default RenderSquares;
