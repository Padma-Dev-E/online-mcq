/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 22:36:00
 * Project: sh_mcq_web_next
 */
'use client'

import {getCookie} from "../utils/clientCookie";
import {tokenKey} from "../utils/constants";
import axios from "axios";

export const base_url = `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}${process.env.NEXT_PUBLIC_BASE_SERVER_URL_VERSION}`;


const apiService = () => {
    const defaultOptions = {
        baseURL: base_url,
        headers: {
            "Content-Type": "application/json",
        },
    };
    let instance = axios.create(defaultOptions);
    instance.interceptors.request.use(function (config) {
        if (getCookie(tokenKey) !== null) {
            config.headers.Authorization = `Bearer ${getCookie(tokenKey)}`;
        }
        return config;
    });
    return instance;
};

export default apiService();