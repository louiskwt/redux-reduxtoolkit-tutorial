import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

function ChangeTheme() {
	const [color, setColor] = useState('');
	const dispatch = useDispatch();

	return (
		<div>
			<input
				type='text'
				onChange={(event) => {
					setColor(event.target.value);
				}}
			/>
			<button onClick={() => dispatch(changeColor(color))}>
				Change Theme
			</button>
		</div>
	);
}

export default ChangeTheme;
