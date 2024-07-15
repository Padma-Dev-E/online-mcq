'use client'
import {Heading, Subheading} from "@/components/heading";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {AuthState, loginApi, LoginReset} from "@/app/redux/authReducer/authReducer";
import {useEffect} from "react";
import {refreshKey, tokenKey} from "@/app/utils/constants";
import {setClientCookie} from "@/app/utils/clientCookie";
import jwtDecode from 'jsonwebtoken/decode';

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch()

    const {Login} = useSelector(AuthState)

    const setToken = (key, token) => {
        const decodedToken = jwtDecode(token);
        const expireTime = decodedToken.exp ? (decodedToken.exp - Math.floor(Date.now() / 1000)) / (24 * 60 * 60) : 7;
        setClientCookie(key, token, expireTime);
    }

    useEffect(() => {
        if (Login.data) {
            setToken(tokenKey, Login.data.access_token)
            setToken(refreshKey, Login.data.refresh_token)
            router.push("/home/exam")
        }
        return () => {
            dispatch(LoginReset)
        }
    }, [Login.data]);

    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const formData = new FormData(event.target);
        const data = {
            email: formData.get('username'),
            password: formData.get('password')
        };
        dispatch(loginApi(data))
    }

    return (
        <div className={"flex w-full h-full items-center justify-center"} style={{height: "100vh"}}>
            <form className="w-full lg:w-1/3 md:w-1/2 flex flex-col gap-5 p-4 md:p-6 lg:p-8" onSubmit={onSubmit}>
                <Heading>Sign in to Online MCQ</Heading>
                <div>
                    <div className="space-y-1">
                        <Subheading>Username</Subheading>
                    </div>
                    <div className="pt-1">
                        <Input aria-label="Username" name="username" required/>
                    </div>
                </div>
                <div>
                    <div className="space-y-1">
                        <Subheading>Password</Subheading>
                    </div>
                    <div className="pt-1">
                        <Input aria-label="Password" name="password" type="password" required/>
                    </div>
                </div>
                <div className="flex justify-end gap-4 cursor-pointer">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>
    )
}
