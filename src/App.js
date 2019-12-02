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
			squares: []
		};
	}
	const;
	componentDidMount() {
		const render = renderSquare();
		this.setState({ squares: render, isStart: false });
	}
	newGame() {
		const render = renderSquare();
		this.setState({
			squares: render,
			isStart: !this.state.isStart
		});
	}
	render() {
		const { isStart, squares } = this.state;
		return (
			<div className="App">
				<button className="btn" onClick={() => this.newGame()}>
					{this.state.isStart ? ' RESET GAME' : 'START GAME'}
				</button>
				<Board squares={squares} isStart={isStart} />
			</div>
		);
	}
}

export default App;
