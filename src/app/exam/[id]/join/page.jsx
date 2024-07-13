'use client'
import React, {useEffect} from 'react';
import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {Badge} from "@/components/badge";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {ExamState, joinExamApi} from "@/app/redux/examReducer/examReducer";
import jwtDecode from "jsonwebtoken/decode";
import {setClientCookie} from "@/app/utils/clientCookie";
import {examTokenKey} from "@/app/utils/constants";

export default function Page({params}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const {id} = params;
    const {JoinExam} = useSelector(ExamState);

    const setToken = (key, token) => {
        const decodedToken = jwtDecode(token);
        const expireTime = decodedToken.exp ? (decodedToken.exp - Math.floor(Date.now() / 1000)) / (24 * 60 * 60) : 7;
        setClientCookie(key, token, expireTime);
    }

    useEffect(() => {
        if (JoinExam.data) {
            setToken(examTokenKey, JoinExam.data.access_token)
            router.push(`/exam/${id}/`)
        }
    }, [JoinExam.data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            exam_id: id
        };

        dispatch(joinExamApi(payload));
    };

    return (
        <>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                    <div className="w-32 shrink-0">
                        <img className="aspect-[3/2] rounded-lg shadow" src={"event.imgUrl"} alt=""/>
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Heading>{"Title"}</Heading>
                            <Badge color={1 === 'On Sale' ? 'lime' : 'zinc'}>{"active"}</Badge>
                        </div>
                        <div className="mt-2 text-sm/6 text-zinc-500">
                            {"event.date"} at {"event.time"} <span aria-hidden="true">·</span> {"event.location"}
                        </div>
                    </div>
                </div>
            </div>

            <form method="post" className="mx-auto mt-4" onSubmit={handleSubmit}>
                <Heading>Join Online MCQ</Heading>
                <Divider className="my-10 mt-6"/>
                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Subheading>Name</Subheading>
                        <div className={"mt-4"}>
                            <Input name="name" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Email</Subheading>
                        <div className={"mt-4"}>
                            <Input name="email" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Mobile</Subheading>
                        <div className={"mt-4"}>
                            <Input name="mobile" required/>
                        </div>
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <div className="flex justify-end gap-4">
                    <Button type="submit">Join</Button>
                </div>
            </form>
        </>
    );
}
