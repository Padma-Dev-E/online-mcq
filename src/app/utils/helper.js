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
