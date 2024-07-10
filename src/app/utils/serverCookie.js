/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 22:59:08
 * Project: sh_mcq_web_next
 */

export function setServerCookie(response, name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    response.headers.append('Set-Cookie', `${name}=${value || ""}${expires}; Path=/; HttpOnly`);
}

export function getServerCookie(request, name) {
    const cookie = request.headers.get('cookie');
    if (!cookie) return null;
    const cookies = cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [cookieName, cookieValue] = cookies[i].split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

export function eraseServerCookie(response, name) {
    response.headers.append('Set-Cookie', `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; HttpOnly`);
}
