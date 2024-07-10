'use client'
import {Heading, Subheading} from "@/components/heading";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {useRouter} from "next/navigation";
import {setClientCookie} from "@/app/utils/clientCookie";
import {tokenKey} from "@/app/utils/constants";

export default function Login() {
    const router = useRouter();
    const onSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setClientCookie(tokenKey, "meow", 7)
        router.push("/home")
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
                        <Input aria-label="Username" name="username"/>
                    </div>
                </div>
                <div>
                    <div className="space-y-1">
                        <Subheading>Password</Subheading>
                    </div>
                    <div className="pt-1">
                        <Input aria-label="Password" name="password" type="password"/>
                    </div>
                </div>
                <div className="flex justify-end gap-4 cursor-pointer">
                    <Button type="submit">Login</Button>
                </div>
            </form>

        </div>
    )
}
