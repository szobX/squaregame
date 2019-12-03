import React, { useState, useEffect } from 'react';
import Square from '../Square';
import { randomColor } from '../renderSquare';
import './board.css';
const Board = ({ squares, isStart, endGameFunc }) => {
	const [ click, setClick ] = useState(false);
	const [ points, setPoints ] = useState(0);
	const matchedNumber = [];
	const moves = [ [ -1, 0 ], [ 0, 1 ], [ 1, 0 ], [ 0, -1 ] ];
	const [ endGame, setEndGame ] = useState(false);

	const handleClick = (x, y, id, color) => {
		if (!click || isStart === false) {
			setClick(true);
			matchedNumber.length = 0;
			searchMatch(x, y, id, color);
			if (matchedNumber.length === 1) {
				setClick(false);
				return;
			}
			const findedElements = squares.filter(square => matchedNumber.includes(square.id));
			setPoints(prev => prev + matchedNumber.length);
			movesInArray(findedElements);

			//check end game
			let soloElement = 0;
			squares.forEach(square => {
				if (soloElement === 0) {
					moves.forEach(move => {
						const element = cElement(square.x, square.y, move[0], move[1]);
						if (element === undefined) return;
						if (element.color === square.color) soloElement++;
					});
				} else {
					return;
				}
			});
			if (soloElement === 0) {
				setEndGame(true);
			}
			setClick(false);
		}
	};
	useEffect(
		() => {
			setPoints(0);
		},
		[ isStart, squares ]
	);
	const movesInArray = findedElements => {
		findedElements.forEach(x => {
			x.color = '#FFFFFF';
			const row = squares.filter(sq => sq.y === x.y);

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
			row.forEach((e, index) => {});
		});
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
			if (currentElement === undefined) return;

			if (currentElement.x < 1 || currentElement.y < 1) return;

			if (matchedNumber.includes(currentElement.id)) return;

			if (currentElement.color !== color) return;
			else {
				searchMatch(currentElement.x, currentElement.y, currentElement.id, color);
				return;
			}
		});
	};

	return (
		<div>
			{endGame === true ? endGameFunc : ''}
			{isStart ? <div> points:{points}</div> : ''}
			<div className="board" style={isStart ? {} : { filter: 'grayscale(100%)' }}>
				{squares.map(({ x, y, id, color }) => (
					<Square x={x} y={y} id={id} color={color} handleClick={handleClick} disable={isStart} />
				))}
			</div>
		</div>
	);
};
export default Board;
