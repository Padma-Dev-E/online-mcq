'use client'
export const runtime = 'edge';
import React from 'react';
import {getClientCookie} from "@/app/utils/clientCookie";
import {examTokenKey, refreshKey, tokenKey} from "@/app/utils/constants";

export default function page() {
    const token = getClientCookie(tokenKey)
    const refresh = getClientCookie(refreshKey)
    const examToken = getClientCookie(examTokenKey)

    return (
        <div>
            <h1>aa</h1>
            <h1> Token :{token} | end</h1>
            <h1> Refresh :{refresh} | end</h1>
            <h1> Exam Token :{examToken} | end</h1>
        </div>
    );
}
