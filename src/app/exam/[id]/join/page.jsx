'use client'
export const runtime = 'edge';
import React, {useEffect, useState} from 'react';
import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {ExamState, joinExamApi, JoinExamReset} from "@/app/redux/examReducer/examReducer";
import jwtDecode from "jsonwebtoken/decode";
import {setClientCookie} from "@/app/utils/clientCookie";
import {examTokenKey} from "@/app/utils/constants";
import ErrorBox from "@/components/ErrorBox";
import LoadingIcon from "@/components/loading";

export default function Page({params}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const {id} = params;
    const {JoinExam} = useSelector(ExamState);
    const [ld, setLd] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = `Online MCQ | Join`;
        }
    }, []);

    const setToken = (key, token) => {
        const decodedToken = jwtDecode(token);
        const expireTime = decodedToken.exp ? (decodedToken.exp - Math.floor(Date.now() / 1000)) / (24 * 60 * 60) : 7;
        setClientCookie(key, token, expireTime);
        setClientCookie("ld", JSON.stringify(ld), expireTime);
    }


    useEffect(() => {
        if (JoinExam.data) {
            setToken(examTokenKey, JoinExam.data.access_token)
            router.push(`/exam/${id}/`)
        }
        return () => {
            dispatch(JoinExamReset())
        }
    }, [JoinExam.data]);

    function validatePayload(data) {
        const errors = [];

        // Validate name
        if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
            errors.push('Name is required and must be a non-empty string.');
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || typeof data.email !== 'string' || !emailRegex.test(data.email)) {
            errors.push('A valid email is required.');
        }

        // Validate mobile
        const mobileRegex = /^[0-9]{10}$/; // Example: 10 digit mobile number
        if (!data.mobile || typeof data.mobile !== 'string' || !mobileRegex.test(data.mobile)) {
            errors.push('A valid 10-digit mobile number is required.');
        }

        return errors;
    }

    const [dataError, setDataError] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            name: data.name.toLowerCase(),
            email: data.email.toLowerCase(),
            mobile: data.mobile,
            exam_id: id
        };

        const errors = validatePayload(data);
        setDataError(errors)
        if (errors.length === 0) {
            setLd(payload)
            dispatch(joinExamApi(payload));
        }
    };

    useEffect(() => {
        console.log("-----Loaded A------")
    }, []);

    return (
        <>
            {(JoinExam.error || dataError.length > 0) &&
                <ErrorBox message={JoinExam.error || dataError[0]}/>
            }
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
                    <Button type="submit" disabled={JoinExam.isLoading}>Join
                        {JoinExam.isLoading &&
                            <div className={"animate-spin"}>
                                <LoadingIcon/>
                            </div>
                        }</Button>
                </div>
            </form>
        </>
    );
}
