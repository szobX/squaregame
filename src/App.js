import React, { useEffect, useState } from 'react';
import './App.css';
import renderSquare from './components/renderSquare';
import Board from './components/Board';
// import Board from './components/Board/Board';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: []
		};
	}

	componentDidMount() {
		const render = renderSquare();
		this.setState({ squares: render });
	}

	render() {
		return (
			<div className="App">
				{/* {this.state.squares.length} */}
				<Board squares={this.state.squares} />
			</div>
		);
	}
}

export default App;
