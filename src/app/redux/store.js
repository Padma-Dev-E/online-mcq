/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 21:49:16
 * Project: sh_mcq_web_next
 */
'use client';
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/app/redux/authReducer/authReducer";

export default configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
});