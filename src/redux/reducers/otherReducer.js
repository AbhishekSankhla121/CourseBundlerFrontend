import { createReducer } from "@reduxjs/toolkit"

export const otherReducer = createReducer({}, (builder) => {
    builder
        // create a new reducer for contact request start here
        .addCase("contactRequest", (state) => {
            state.loading = true;
        })
        .addCase("contactSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("contactFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new reducer for contact request end here
        // create a new reducer for courseRequest request start here
        .addCase("courseRequestRequest", (state) => {
            state.loading = true;
        })
        .addCase("courseRequestSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("courseRequestFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new reducer for courseRequest request end here
        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })
})
