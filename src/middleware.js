import { NextResponse } from 'next/server';
import { examTokenKey, tokenKey } from '@/app/utils/constants';

export function middleware(request) {
    const token = getCookieFromRequest(request, tokenKey);
    const examToken = getCookieFromRequest(request, examTokenKey);
    const { pathname } = request.nextUrl;

    const examJoinMatch = pathname.match(/^\/exam\/([^/]+)\/join$/);

    // Redirect root URL to /home
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    if (token && pathname === '/auth/login') {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    if (!token && pathname !== '/auth/login' && pathname !== '/exam' && !examJoinMatch && !pathname.startsWith('/exam')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (pathname.startsWith('/exam') && !examJoinMatch && !examToken) {
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
        '/home/:path*',
        '/auth/login',
        '/exam/:path*',
        '/',
    ],
};
