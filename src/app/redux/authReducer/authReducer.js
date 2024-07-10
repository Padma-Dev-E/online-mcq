/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 21:50:25
 * Project: sh_mcq_web_next
 */
import {createSlice} from "@reduxjs/toolkit";
import apiService from "../../api/apiService";
import {endPoints} from "../../api/endpoints";
import {createAPIAsyncReducers, formatAxiosErrorMessage} from "@/app/redux/redux_utils";

const initialAuthState = {
    isAuthenticated: false,
    login: {
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
        ...createAPIAsyncReducers('Login', initialAuthState.login),
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

export const {
    LoginRequesting,
    LoginSuccess,
    LoginError,
    LoginReset
} = authSlice.actions;
export const authState = (state) => state.auth;
export default authSlice.reducer;
