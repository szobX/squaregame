import React from 'react';

import './square.css';

const Square = ({ x, y, id, color, handleClick }) => {
	return (
		<div className="square" onClick={() => handleClick(x, y, id, color)} style={{ background: color }}>
			{/* {x}/{y} */}
		</div>
	);
};

export default Square;
