/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 21:14:09
 * Project: javascript
 */
import {NextResponse} from 'next/server';
import {tokenKey} from '@/app/utils/constants';

export function middleware(request) {
    const token = getCookieFromRequest(request, tokenKey);
    console.log(token)
    const {pathname} = request.nextUrl;

    if (token && pathname === '/auth/login') {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    if (!token && pathname !== '/auth/login' && pathname !== '/live') {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

function getCookieFromRequest(request, name) {
    const cookieHeader = request.headers.get('cookie');
    if (!cookieHeader) return null;
    const cookies = cookieHeader.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [cookieName, cookieValue] = cookies[i].split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

export const config = {
    matcher: [
        '/home',
        '/auth/login',
        '/live/:path*',
    ],
};

