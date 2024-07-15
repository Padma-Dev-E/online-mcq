/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 22:36:00
 * Project: sh_mcq_web_next
 */
'use client'
import {examTokenKey, tokenKey} from "../utils/constants";
import axios from "axios";
import {getClientCookie} from "@/app/utils/clientCookie";

// export const base_url = `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}`;
export const base_url = `https://mcq_server.box.kitty-dev.com`;


const apiService = () => {
    const defaultOptions = {
        baseURL: base_url,
        headers: {
            "Content-Type": "application/json",
        },
    };
    let instance = axios.create(defaultOptions);
    instance.interceptors.request.use(function (config) {
        if (getClientCookie(tokenKey) !== null && getClientCookie(examTokenKey) === null) {
            config.headers.Authorization = `Bearer ${getClientCookie(tokenKey)}`;
        }
        if (getClientCookie(examTokenKey) !== null) {
            config.headers.Authorization = `Bearer ${getClientCookie(examTokenKey)}`;
        }
        return config;
    });
    return instance;
};

export default apiService();