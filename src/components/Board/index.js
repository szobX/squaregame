import React, { useState, useEffect } from 'react';
import Square from '../Square';
import { randomColor } from '../renderSquare';
import './board.css';
const Board = ({ squares }) => {
	// const [ square, setSquare ] = useState();

	const [ points, setPoints ] = useState(0);
	const matchedNumber = [];
	const moves = [ [ -1, 0 ], [ 0, 1 ], [ 1, 0 ], [ 0, -1 ] ];

	const handleClick = (x, y, id, color) => {
		matchedNumber.slice(0, matchedNumber.length);
		searchMatch(x, y, id, color);
		console.log(matchedNumber);
		if (matchedNumber.length === 1) return;
		const findedElements = squares.filter(square => matchedNumber.includes(square.id));
		console.log('usuniete klocki', findedElements);
		setPoints(prev => prev + matchedNumber.length);
		// setSquare(findedElements);

		movesInArray(findedElements);
	};
	// const swap = (element, index) => {
	// 	if (element[index + 1] === undefined) return false;

	// 	if (element[index + 1].color === 'white') {
	// 		const temp = element[index].color;
	// 		element[index + 1].color = element[index].color;
	// 		element[index].color = 'white';
	// 	}
	// 	if (element[index].color === 'white') return true;
	// 	else {
	// 		if (swap(element[index + 1], index + 1) === false) return;
	// 	}
	// };
	const movesInArray = findedElements => {
		console.log(squares);
		findedElements.forEach(x => {
			x.color = '#FFFFFF';
			const row = squares.filter(sq => sq.y === x.y);
			// console.log(row);

			const nonWhiteColors = row.map(({ color }) => color).filter(color => color !== '#FFFFFF');
			const newData = [
				...Array.from({ length: row.length - nonWhiteColors.length }, () => '#FFFFFF'),
				...nonWhiteColors
			].map((color, index) => {
				return {
					...row[index],
					color
				};
			});
			row.forEach((e, i) => {
				if (newData[i].color === '#FFFFFF') {
					e.color = randomColor();
				} else {
					e.color = newData[i].color;
				}
			});
			// row = newData;

			row.forEach((e, index) => {});
			console.log('----');

			// console.log(row);
		});

		console.log(squares);
	};

	const cElement = (x, y, moveX, moveY) => {
		const newX = x + moveX;
		const newY = y + moveY;
		const element = squares.filter(f => f.x === newX).filter(f => f.y === newY);
		return element[0];
	};

	const searchMatch = (x, y, id, color) => {
		matchedNumber.push(id);
		moves.forEach(move => {
			const currentElement = cElement(x, y, move[0], move[1]);
			// console.log('akt element', currentElement);
			// console.log('color:', currentColor);
			if (currentElement === undefined) {
				// console.log('undefined');
				return;
			}
			if (currentElement.x < 1 || currentElement.y < 1) {
				// console.log('sciana');
				return;
			}
			if (matchedNumber.includes(currentElement.id)) {
				// console.log('juz dodany');
				return;
			}
			if (currentElement.color !== color) {
				// console.log('sciana kolor');
				return false;
			} else {
				searchMatch(currentElement.x, currentElement.y, currentElement.id, color);
				// console.log('moge isc dalej');
				return true;
			}
		});
		return true;
	};

	return (
		<div>
			points:{points}
			<div className="board">
				{squares.map(({ x, y, id, color }) => (
					<Square x={x} y={y} id={id} color={color} handleClick={handleClick} />
				))}
			</div>
		</div>
	);
};
export default Board;

// TODO::  wyjąć wszystkie kolory   to tablicy
// TODO:: ZAMIENIĆ ICH KOLEJNOSCI I DOPISAC ZNÓW DO OBIEKTÓW

// const tab = [
// 	{ x: 1, y: 3, id: '13', color: '#FFFFFF' },
// 	{ x: 2, y: 3, id: '23', color: '#36EEEE' },
// 	{ x: 3, y: 3, id: '33', color: '#6F2168' },
// 	{ x: 4, y: 3, id: '43', color: '#6F2168' },
// 	{ x: 5, y: 3, id: '53', color: '#6F2168' },
// 	{ x: 6, y: 3, id: '63', color: '#6693DD' },
// ];
