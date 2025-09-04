'use client'
import React, {useEffect, useState} from 'react';
import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {examInfoApi, ExamState, joinExamApi, JoinExamReset} from "@/app/redux/examReducer/examReducer";
import jwtDecode from "jsonwebtoken/decode";
import {setClientCookie} from "@/app/utils/clientCookie";
import {examTokenKey} from "@/app/utils/constants";
import ErrorBox from "@/components/ErrorBox";
import LoadingIcon from "@/components/loading";
import {Select} from "@/components/select";

function TermsModal({ isOpen, onClose, onAccept }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70">
            <div
                className="rounded-lg shadow-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 bg-white dark:bg-gray-900"
            >
                <Heading className="text-gray-900 dark:text-gray-100">Preliminary Round Guidelines</Heading>
                <ul
                    className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside space-y-3 max-h-[55vh] overflow-y-auto"
                >
                    <li>The preliminary round will be held through online mode.</li>
                    <li>Candidates will participate individually but must be physically present in the room during the exam.</li>
                    <li>The preliminary round consists of 50 MCQs with a time limit of 30 minutes.</li>
                    <li>All team members will attend the exam simultaneously in the same room.</li>
                    <li>Each MCQ has only one correct answer.</li>
                    <li>Each correct response carries 1 mark; no negative marks for incorrect answers.</li>
                    <li>Each candidate receives individual scoring.</li>
                    <li>The total of all individual team members’ scores forms the team score.</li>
                    <li>The top 8 teams with the highest aggregate scores qualify for the final.</li>
                    <li>If two or more teams tie for the last qualifying position, a tie breaker round will be held among them.</li>
                    <li>Only candidates appearing for the quiz are allowed in the exam room.</li>
                    <li>Any malpractice or communication among candidates during the exam will result in team disqualification.</li>
                    <li>Once a question is answered, candidates cannot go back to change their response.</li>
                </ul>
                <div className="flex justify-end mt-6 gap-4">
                    <Button onClick={onAccept} autoFocus>Agree</Button>
                </div>
            </div>
        </div>
    );
}


export default function Page({params}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const {id} = params;
    const {JoinExam, ExamInfo} = useSelector(ExamState);
    const [ld, setLd] = useState(null);
    const [dataError, setDataError] = useState([]);
    const [showTerms, setShowTerms] = useState(true);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [formPayload, setFormPayload] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = `Online MCQ | Join`;
        }

        if (id) {
            dispatch(examInfoApi({exam_id: id}));
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

        if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
            errors.push('Name is required and must be a non-empty string.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || typeof data.email !== 'string' || !emailRegex.test(data.email)) {
            errors.push('A valid email is required.');
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!data.mobile || typeof data.mobile !== 'string' || !mobileRegex.test(data.mobile)) {
            errors.push('A valid 10-digit mobile number is required.');
        }

        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const errors = validatePayload(data);
        setDataError(errors);

        if (errors.length === 0) {
            if (!termsAccepted) {
                // Save data temporarily and show terms modal
                setFormPayload({
                    name: data.name.toLowerCase(),
                    email: data.email.toLowerCase(),
                    mobile: data.mobile,
                    institute: data.institute,
                    registration: data.registration,
                    group: data.group,
                    exam_id: id
                });
                setShowTerms(true);
                return;
            }

            setLd({
                name: data.name.toLowerCase(),
                email: data.email.toLowerCase(),
                mobile: data.mobile,
                institute: data.institute,
                registration: data.registration,
                group: data.group,
                exam_id: id
            });

            dispatch(joinExamApi({
                name: data.name.toLowerCase(),
                email: data.email.toLowerCase(),
                mobile: data.mobile,
                institute: data.institute,
                registration: data.registration,
                group: data.group,
                exam_id: id
            }));
        }
    };

    const handleTermsAccept = () => {
        setTermsAccepted(true);
        setShowTerms(false);
        if (formPayload) {
            setLd(formPayload);
            dispatch(joinExamApi(formPayload));
            setFormPayload(null);
        }
    };

    const handleTermsClose = () => {
        setShowTerms(false);
    };

    if (ExamInfo.isLoading) {
        return <Heading>Fetching Exam details...</Heading>
    }

    return (
        <>
            {(JoinExam.error || dataError.length > 0 || ExamInfo.error) &&
                <ErrorBox message={JoinExam.error || dataError[0] || ExamInfo.error}/>
            }

            <form method="post" className="mx-auto mt-4" onSubmit={handleSubmit}>
                {ExamInfo.data?.exam_name ?
                    <div>
                        <Heading>{ExamInfo.data?.exam_name}</Heading>

                    </div>

                    :
                    <Heading>Join Online MCQ</Heading>
                }

                <Divider className="my-10 mt-6"/>
                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Subheading>Name</Subheading>
                        <div className={"mt-4"}>
                            <Input name="name" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Email Id</Subheading>
                        <div className={"mt-4"}>
                            <Input name="email" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Mobile Number</Subheading>
                        <div className={"mt-4"}>
                            <Input name="mobile" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Institute</Subheading>
                        <div className={"mt-4"}>
                            <Input name="institute" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>APASICON 2025 Registration ID</Subheading>
                        <div className={"mt-4"}>
                            <Input name="registration" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Team</Subheading>
                        <div className={"mt-4"}>
                            <Select name="group" required defaultValue="">
                                <option value="" disabled>Select a team</option>
                                <option value="a">Team A</option>
                                <option value="b">Team B</option>
                            </Select>
                        </div>
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <div className="flex justify-end gap-4">
                    <Button type="submit" disabled={JoinExam.isLoading}>
                        Join
                        {JoinExam.isLoading &&
                            <div className={"animate-spin"}>
                                <LoadingIcon/>
                            </div>
                        }
                    </Button>
                </div>
            </form>

            <TermsModal isOpen={showTerms} onClose={handleTermsClose} onAccept={handleTermsAccept}/>
        </>
    );
}
