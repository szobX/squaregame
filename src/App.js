import React, { useEffect, useState } from 'react';
import './App.css';
import renderSquare from './components/renderSquare';
import Board from './components/Board';
// import Board from './components/Board/Board';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStart: false,
			squares: [],
			x: 0,
			y: 0
		};
	}
	const;
	componentDidMount() {
		const width = window.innerWidth;
		console.log(width);
		console.log(width);
		if (width < 500) {
			this.setState({
				y: 5,
				x: 10
			});
		} else if (width > 500 || width < 1000) {
			this.setState({
				y: 7,
				x: 8
			});
		}
		if (width > 1000) {
			this.setState({
				y: 13,
				x: 7
			});
		}

		const render = renderSquare(this.state.x, this.state.y);
		this.setState({ squares: render, isStart: false });
	}
	newGame() {
		const render = renderSquare(this.state.x, this.state.y);
		this.setState({
			squares: render,
			isStart: !this.state.isStart
		});
	}
	endGame = () => {
		alert('End Game!');
		this.setState({
			isStart: true
		});
	};
	render() {
		const { isStart, squares } = this.state;
		return (
			<div className="App">
				<button className="btn" onClick={() => this.newGame()}>
					{this.state.isStart ? ' RESET GAME' : 'START GAME'}
				</button>
				<Board squares={squares} isStart={isStart} endGameFunc={this.endGame} />
			</div>
		);
	}
}

export default App;
