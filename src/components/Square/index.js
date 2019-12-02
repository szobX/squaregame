import React from 'react';

import './square.css';

const Square = ({ x, y, id, color, handleClick, disable }) => {
	console.log(!disable);
	return (
		<div
			className="square"
			onClick={disable === true ? () => handleClick(x, y, id, color) : null}
			style={{ background: color }}
		>
			{/* {x}/{y} */}
		</div>
	);
};

export default Square;
