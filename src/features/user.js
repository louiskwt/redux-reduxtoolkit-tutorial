import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	// name of the state
	name: 'user',
	initialState: { value: { name: '', age: 0, email: '' } },
	reducers: {
		// Functions to be used for modifying the states
		// State => keeping track of state
		// Action => (1) Payload: the new value for the state (2) type = different actions
		login: (state, action) => {
			state.value = action.payload;
		}
	}
});

// export the reducer
export default userSlice.reducer;
