import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { name: '', age: 0, email: '' };

export const userSlice = createSlice({
	// name of the state
	name: 'user',
	initialState: { value: initialStateValue },
	reducers: {
		// Functions to be used for modifying the states
		// State => keeping track of state
		// Action => (1) Payload: the new value for the state (2) type = different actions
		login: (state, action) => {
			state.value = action.payload;
		},
		logout: (state) => {
			state.value = initialStateValue;
		}
	}
});

// Exporting the actions
export const { login, logout } = userSlice.actions;

// export the reducer
export default userSlice.reducer;
