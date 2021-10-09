import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '';

export const themeSlice = createSlice({
	// name of the state
	name: 'theme',
	initialState: { value: initialStateValue },
	reducers: {
		// Functions to be used for modifying the states
		// State => keeping track of state
		// Action => (1) Payload: the new value for the state (2) type = different actions
		changeColor: (state, action) => {
			state.value = action.payload;
		}
	}
});

// Exporting the actions
export const { changeColor } = themeSlice.actions;

// export the reducer
export default themeSlice.reducer;
