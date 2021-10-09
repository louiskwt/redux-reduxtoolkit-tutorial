import React from 'react';
import { useDispatch } from 'react-redux'; // used to modify value
import { login, logout } from '../features/user';

function Login() {
	const dispatch = useDispatch();
	return (
		<div>
			<button
				onClick={() => {
					dispatch(
						login({
							name: 'Louis',
							age: 26,
							email: 'louis@gmail.com'
						})
					);
				}}
			>
				Log in
			</button>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				Logout
			</button>
		</div>
	);
}

export default Login;
