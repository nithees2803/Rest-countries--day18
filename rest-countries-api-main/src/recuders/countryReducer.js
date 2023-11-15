import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    country: null,
    error: null
}

// Create a slice of the state
const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountry(state, action) {
            state.country = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }

});

// Get all action identifiers, generated by React Toolkit
export const countryActions = countrySlice.actions;

export default countrySlice;