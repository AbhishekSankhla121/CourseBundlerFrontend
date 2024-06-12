import { createReducer } from "@reduxjs/toolkit"

export const adminReducer = createReducer({}, (builder) => {
    builder
        // create a new reducer to get delete the user start from here
        .addCase("getAdminStatsRequest", (state) => {
            state.loading = true;
        })
        .addCase("getAdminStatsSuccess", (state, action) => {
            state.loading = false;
            state.stats = action.payload.stats;
            state.viewsCount = action.payload.viewsCount;
            state.subscriptionsCount = action.payload.subscriptionsCount;
            state.userCount = action.payload.userCount;
            state.subscriptionsPercentage = action.payload.subscriptionsPercentage;
            state.viewsPercentage = action.payload.viewsPercentage;
            state.usersPercentage = action.payload.usersPercentage;
            state.subscriptionsProfit = action.payload.subscriptionsProfit;
            state.viewsProfit = action.payload.viewsProfit;
            state.usersProfit = action.payload.usersProfit;
        })
        .addCase("getAdminStatsFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new reducer to get delete user ends to here 

        // create a new reducer to get delete the user start from here
        .addCase("deleteUserRequest", (state) => {
            state.loading = true;
        })
        .addCase("deleteUserSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("deleteUserFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new reducer to get delete user ends to here 

        // create a new reducer to update the user ROLE start from here
        .addCase("updateUserRoleRequest", (state) => {
            state.loading = true;
        })
        .addCase("updateUserRoleSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("updateUserRoleFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new reducer to update the user ROLE ends to here 


        // create a new reducer to get all the user start from here
        .addCase("getAllUsersRequest", (state) => {
            state.loading = true;
        })
        .addCase("getAllUsersSuccess", (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase("getAllUsersFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new reducer to get all user ends to here 

        // create a new  course reducer start from here
        .addCase("createCourseRequest", (state) => {
            state.loading = true;
        })
        .addCase("createCourseSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("createCourseFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new course reducer ends to here 


        // create a new delete course reducer start from here
        .addCase("deleteCourseRequest", (state) => {
            state.loading = true;
        })
        .addCase("deleteCourseSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("deleteCourseFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a new delete course reducer ends to here 


        // create a add new lecture course reducer start from here
        .addCase("addLectureRequest", (state) => {
            state.loading = true;
        })
        .addCase("addLectureSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("addLectureFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a add new lecture course reducer ends to here 


        // create a delete new lecture course reducer start from here
        .addCase("deleteLectureRequest", (state) => {
            state.loading = true;
        })
        .addCase("deleteLectureSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("deleteLectureFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // create a delete new lecture course reducer ends to here 

        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })
}) 