/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 21:50:25
 * Project: sh_mcq_web_next
 */
'use client'
import {createSlice} from "@reduxjs/toolkit";
import apiService from "../../api/apiService";
import {endPoints} from "../../api/endpoints";
import {createAPIAsyncReducers, formatAxiosErrorMessage} from "@/app/redux/redux_utils";

const initialAuthState = {
    isAuthenticated: false,
    Login: {
        isLoading: false,
        data: null,
        error: null,
    },
    Logout: {
        isLoading: false,
        data: null,
        error: null,
    },
    UserSummary: {
        isLoading: false,
        data: null,
        error: null,
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        ...initialAuthState,
    },
    reducers: {
        ...createAPIAsyncReducers('Login', initialAuthState.Login),
        ...createAPIAsyncReducers('Logout', initialAuthState.Logout),
        ...createAPIAsyncReducers('UserSummary', initialAuthState.UserSummary),
    },
});

export const loginApi = (data) => async (dispatch) => {
    dispatch(LoginRequesting());
    apiService
        .post(endPoints.auth.login, data)
        .then((response) => dispatch(LoginSuccess(response.data)))
        .catch((error) =>
            dispatch(LoginError(formatAxiosErrorMessage(error)))
        );
};

export const logoutApi = (data) => async (dispatch) => {
    dispatch(LogoutRequesting());
    apiService
        .post(endPoints.auth.logout, data)
        .then((response) => dispatch(LogoutSuccess(response.data)))
        .catch((error) =>
            dispatch(LogoutError(formatAxiosErrorMessage(error)))
        );
};


export const UserSummaryApi = (data) => async (dispatch) => {
    dispatch(UserSummaryRequesting());
    apiService
        .get("/user/user_summary/", data)
        .then((response) => dispatch(UserSummarySuccess(response.data)))
        .catch((error) =>
            dispatch(UserSummaryError(formatAxiosErrorMessage(error)))
        );
};

export const {
    LoginRequesting,
    LoginSuccess,
    LoginError,
    LoginReset,

    LogoutRequesting,
    LogoutSuccess,
    LogoutError,
    LogoutReset,

    UserSummaryRequesting,
    UserSummarySuccess,
    UserSummaryError,
    UserSummaryReset,

} = authSlice.actions;
export const AuthState = (state) => state.auth;
export default authSlice.reducer;
