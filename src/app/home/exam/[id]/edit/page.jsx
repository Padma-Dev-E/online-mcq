'use client'
import React, {useEffect, useState} from 'react';
import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Text} from "@/components/text";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {ClientTimeStampToServerTimeStamp} from "@/app/utils/helper";
import {useDispatch, useSelector} from "react-redux";
import {
    ExamDetailsApi,
    ExamDetailsReset,
    ExamState,
    ExamUpdateApi,
    ExamUpdateReset
} from "@/app/redux/examReducer/examReducer";
import {useRouter} from "next/navigation";
import ErrorBox from "@/components/ErrorBox";

export default function Page({params}) {
    const dispatch = useDispatch();
    const router = useRouter();
    const {ExamUpdate, ExamDetails} = useSelector(ExamState);
    const {id} = params;

    const [formData, setFormData] = useState({
        exam_name: '',
        start_time: '',
        duration: 60,
    });

    useEffect(() => {
        document.title = "Edit Exam";
        dispatch(ExamDetailsApi(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (ExamDetails.data) {
            const examData = ExamDetails.data;
            setFormData({
                exam_name: examData.exam_name || '',
                start_time: new Date(examData.start_time * 1000).toISOString().slice(0, 16) || '',
                duration: examData.duration || 60,
            });
        }
    }, [ExamDetails.data]);

    useEffect(() => {
        if (ExamUpdate.data) {
            dispatch(ExamDetailsReset());
            dispatch(ExamUpdateReset());
            router.push(`/home/exam/${id}/`);
        }
    }, [ExamUpdate.data, dispatch, router]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        if (data.start_time) {
            data.start_time = ClientTimeStampToServerTimeStamp(data.start_time);
        }
        dispatch(ExamUpdateApi(id, data));
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        const offset = now.getTimezoneOffset();
        const localISOTime = new Date(now.getTime() - (offset * 60 * 1000)).toISOString().slice(0, 16);
        return localISOTime;
    };

    return (
        <>
            {ExamUpdate.error &&
                <ErrorBox message={ExamUpdate.error}/>
            }
            <form method="post" className="mx-auto max-w-4xl" onSubmit={handleSubmit}>
                <Heading>Edit exam</Heading>
                <Divider className="my-10 mt-6"/>

                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                        <Subheading>Exam title</Subheading>
                    </div>
                    <div>
                        <Input
                            aria-label="Exam Title"
                            name="exam_name"
                            value={formData.exam_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                        <Subheading>Exam start time</Subheading>
                        <Text>This will only be used for displaying the start time. You have to manually start the
                            exam.</Text>
                    </div>
                    <div>
                        <Input
                            aria-label="Exam Start Time"
                            name="start_time"
                            type="datetime-local"
                            value={formData.start_time}
                            onChange={handleInputChange}
                            min={getCurrentDateTime()}
                            required
                        />
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                        <Subheading>Exam duration</Subheading>
                        <Text>This is the duration of the exam in minutes.</Text>
                    </div>
                    <div className="space-y-4">
                        <Input
                            type="number"
                            aria-label="Exam Duration"
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <div className="flex justify-end gap-4">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </>
    );
}
