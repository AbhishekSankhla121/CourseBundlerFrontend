import { createReducer } from "@reduxjs/toolkit"

export const userReducer = createReducer({}, (builder) => {
    builder
        // login reducer start here
        .addCase('loginRequest', (state) => {
            state.loading = true;
        })
        .addCase('loginSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase('loginFail', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
        // login reducer ends here


        // get user profile start here
        .addCase('loadUserRequest', (state) => {
            state.loading = true;
        })
        .addCase('loadUserSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase('loadUserFail', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
        // get profile end here


        // Logged out user  start here
        .addCase('logoutRequest', (state) => {
            state.loading = true;
        })
        .addCase('logoutSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.message = action.payload.message;
        })
        .addCase('logoutFail', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        })
        // Logged out user end here



        // Register user reducer start here
        .addCase('registerRequest', (state) => {
            state.loading = true;
        })
        .addCase('registerSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase('registerFail', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        })
        // register user ends here




        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })
});


export const profileReducer = createReducer({

    loading: false,
    message: null,
    error: null,


}, (builder) => {
    builder

        // Update profile start here
        .addCase("updateProfileRequest", (state) => {
            state.loading = true;
        })
        .addCase("updateProfileSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("updateProfileFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // update profile end here

        // update the profile picture start here
        .addCase("updateProfilePictureRequest", (state) => {
            state.loading = true;
        })
        .addCase("updateProfilePictureSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("updateProfilePictureFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // update the profile picture end here

        // Chnage password start from here
        .addCase("changePasswordRequest", (state) => {
            state.loading = true;
        })
        .addCase("changePasswordSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("changePasswordFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // chnage password end here

        // forget password start from here
        .addCase("forgetPasswordRequest", (state) => {
            state.loading = true;
        })
        .addCase("forgetPasswordSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("forgetPasswordFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // forget password end here

        // reset password start from here
        .addCase("resetPasswordRequest", (state) => {
            state.loading = true;
        })
        .addCase("resetPasswordSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("resetPasswordFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // reset password end here


        // reducer for removeFromPlaylist start here
        .addCase("removeFromPlayListRequest", (state) => {
            state.loading = true;
        })
        .addCase("removeFromPlayListSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("removeFromPlayListFail", (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // reducer for removeFromPlaylist end here


        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })

});



export const subscriptionReducer = createReducer({}, (builder) => {
    builder
        // reducer for buySubscription start here
        .addCase("buySubscriptionRequest", (state) => {
            state.loading = true;
        })
        .addCase("buySubscriptionSuccess", (state, action) => {
            state.loading = false;
            state.subscriptionId = action.payload
        })
        .addCase("buySubscriptionFail", (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // reducer for buySubscription end here

        // reducer for cancelSubscription start here
        .addCase("cancelSubscriptionRequest", (state) => {
            state.loading = true;
        })
        .addCase("cancelSubscriptionSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload
        })
        .addCase("cancelSubscriptionFail", (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        // reducer for cancelSubscription end here
        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })
})