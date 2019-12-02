import React from 'react';
import Square from '../Square';
import './board.css';
class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: this.props.squares,
			colors: [ '#D3AD5C', '#6693DD', '#6F2168', '#366EEE' ]
		};
	}

	randomColor = () => {
		return this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
	};

	componentDidMount() {
		console.log(this.props);
		this.setState({ squares: this.props.squares });
	}

	render() {
		return (
			<div>
				{/* points:{points} */}
				<div className="board">
					{this.props.squares.map(({ x, y, id, color }) => <Square x={x} y={y} id={id} color={color} />)}
				</div>
			</div>
		);
	}
}
export default Board;
