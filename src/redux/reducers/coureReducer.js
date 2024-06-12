import { createReducer } from "@reduxjs/toolkit"



export const courseReducer = createReducer({
    courses: [],
    lectures: [],
}, (builder) => {
    builder
        // reducer for getAllCourses start here
        .addCase("allCoursesRequest", (state) => {
            state.loading = true;
        })
        .addCase("allCoursesSuccess", (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        .addCase("allCoursesFail", (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // reducer for getAllCourses end here

        // reducer for addToPlaylist start here
        .addCase("addToPlaylistRequest", (state) => {
            state.loading = true;
        })
        .addCase("addToPlaylistSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("addToPlaylistFail", (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // reducer for addToPlaylist end here


        // reducer for getAllCourses start here
        .addCase("getCourseRequest", (state) => {
            state.loading = true;
        })
        .addCase("getCourseSuccess", (state, action) => {
            state.loading = false;
            state.lectures = action.payload;
        })
        .addCase("getCourseFail", (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // reducer for getAllCourses end here


        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })

})