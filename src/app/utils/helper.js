/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 22:37:06
 * Project: sh_mcq_web_next
 */
'use client'

export const ServerTimeStampToClientTimeStamp = (serverTimeStamp) => {
    const slipped = serverTimeStamp * 1000
    const utcDate = new Date(slipped);
    const offset = utcDate.getTimezoneOffset();
    const offsetMillis = offset * 60 * 1000;
    const localDate = new Date(utcDate.getTime() - offsetMillis);
    return localDate.getTime()
}

export const ClientTimeStampToServerTimeStamp = (clientTimeStamp) => {
    const localDate = new Date(clientTimeStamp);
    const utcTimeStamp = localDate.getTime() + (localDate.getTimezoneOffset() * 60000);
    return Math.floor(utcTimeStamp / 1000);
}

export function formatMinutes(minutes) {
    if (isNaN(minutes) || minutes < 0) {
        return "Invalid input";
    }

    const days = Math.floor(minutes / (24 * 60));
    const hours = Math.floor((minutes % (24 * 60)) / 60);
    const mins = minutes % 60;

    let result = "";
    if (days > 0) {
        result += `${days}d `;
    }
    if (hours > 0) {
        result += `${hours}h `;
    }
    if (mins > 0) {
        result += `${mins}m`;
    }

    return result;
}

export const timeLeft = (st, duration) => {
    const timestamp = ServerTimeStampToClientTimeStamp(st);
    const timestampMs = timestamp * 1000;
    const currentDate = new Date(timestampMs);
    currentDate.setMinutes(currentDate.getMinutes() + duration);
    const currentTimeMs = Date.now();
    const timeDiffMs = currentDate.getTime() - currentTimeMs;
    return Math.ceil(timeDiffMs / (1000 * 60))
}