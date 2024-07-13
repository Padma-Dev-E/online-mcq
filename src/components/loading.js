/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 13/07/24
 * Time: 20:56:25
 * Project: sh_mcq_web_next
 */

import React from 'react';

export default function LoadingIcon(
    {
        strokeWidth = 3,
        className = "w-1",
        stroke = 'currentColor',
        fill = "none"
    }
) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={strokeWidth} className={className} fill={fill}
             style={{height: 20, width: 20}}
             viewBox="0 0 24 24" stroke={stroke}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
        </svg>
    );
}