/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 23:51:27
 * Project: sh_mcq_web_next
 */
'use client'
import React, {useEffect, useState} from 'react';
import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {Textarea} from "@/components/textarea";
import {Select} from "@/components/select";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {
    ExamState,
    GetExamQuestionDataApi,
    GetQuestionReset,
    updateQuestionApi,
    UpdateQuestionReset
} from "@/app/redux/examReducer/examReducer";
import LoadingIcon from "@/components/loading";
import ErrorBox from "@/components/ErrorBox";

export default function Page({params}) {
    const router = useRouter();
    const dispatch = useDispatch();

    const {id, qid} = params;
    const {UpdateQuestion, GetQuestion} = useSelector(ExamState);

    const [removeOldImage, setRemoveOldImage] = useState(false);
    const [selectedNewImage, setSelectedNewImage] = useState(null);

    useEffect(() => {
        dispatch(GetExamQuestionDataApi(id, qid));
        return () => dispatch(GetQuestionReset())
    }, []);

    useEffect(() => {
        if (UpdateQuestion.data) {
            dispatch(UpdateQuestionReset());
            router.push(`/home/exam/${id}/questions`);
        }
    }, [UpdateQuestion.data]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = `Online MCQ | Edit Question`;
        }
    }, []);

    // Controlled fields:
    const [questionText, setQuestionText] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [options, setOptions] = useState({
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: ""
    });

    useEffect(() => {
        if (GetQuestion?.data) {
            setQuestionText(GetQuestion.data.question || "");
            setSelectedAnswer(GetQuestion.data.answer || "");
            setOptions({
                optionA: GetQuestion.data.options?.optionA || "",
                optionB: GetQuestion.data.options?.optionB || "",
                optionC: GetQuestion.data.options?.optionC || "",
                optionD: GetQuestion.data.options?.optionD || ""
            });
        }
    }, [GetQuestion?.data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const options = {
            optionA: formData.get("optionA"),
            optionB: formData.get("optionB"),
            optionC: formData.get("optionC"),
            optionD: formData.get("optionD")
        };

        formData.delete("optionA");
        formData.delete("optionB");
        formData.delete("optionC");
        formData.delete("optionD");

        formData.set("options", JSON.stringify(options));
        formData.set("exam_id", id);
        formData.set("question_id", qid);

        // If old image is removed → set key to empty
        if (!removeOldImage) {
            formData.set("question_picture_key", GetQuestion?.data?.question_picture || "");
        }

        // If new image is selected → will automatically be added by browser from input field
        if (selectedNewImage === null || selectedNewImage === undefined) {
            formData.delete("question_picture");
        }
        dispatch(updateQuestionApi(formData));
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedNewImage(URL.createObjectURL(file));
            setRemoveOldImage(true)
        } else {
            setSelectedNewImage(null);
        }
    };

    if (GetQuestion.isLoading) {
        return <p>Loading question...</p>
    }

    return (
        <>
            {UpdateQuestion.error &&
                <ErrorBox message={UpdateQuestion.error}/>
            }
            <Heading>Edit Question</Heading>
            <form method="post" className="mx-auto mt-4" onSubmit={handleSubmit}>
                {/* Question */}
                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Subheading>Question</Subheading>
                        <div className={"mt-4"}>
                            <Textarea
                                name="question"
                                required
                                value={questionText}
                                onChange={(e) => setQuestionText(e.target.value)}
                            />
                        </div>
                    </div>
                </section>

                {/* Old image */}
                {GetQuestion?.data?.question_picture && !removeOldImage && (
                    <div className="pt-5">
                        <Subheading>Current Question Image</Subheading>
                        <div className="mt-2">
                            <img
                                src={GetQuestion?.data?.question_picture}
                                alt="Question"
                                className="w-48 h-auto rounded shadow"
                            />
                            <Button
                                type="button"
                                className="mt-2"
                                onClick={() => setRemoveOldImage(true)}
                            >
                                Remove Image
                            </Button>
                        </div>
                    </div>
                )}

                {/* New image */}
                {selectedNewImage && (
                    <div className="pt-5">
                        <Subheading>Selected New Image</Subheading>
                        <div className="mt-2">
                            <img
                                src={selectedNewImage}
                                alt="Selected"
                                className="w-48 h-auto rounded shadow"
                            />
                            <Button
                                type="button"
                                className="mt-2"
                                onClick={() => {
                                    setSelectedNewImage(null);
                                    document.getElementsByName("question_picture")[0].value = ""; // clear file input
                                }}
                            >
                                Remove Selected Image
                            </Button>
                        </div>
                    </div>
                )}

                {/* Image input */}
                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2 pt-5">
                    <div>
                        <Subheading>Question Image (optional)</Subheading>
                        <div className="mt-4">
                            <input
                                type="file"
                                name="question_picture"
                                accept="image/*"
                                onChange={handleImageSelect}
                                className="block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-blue-100"
                            />
                        </div>
                    </div>
                </section>

                <Divider className="my-10" soft/>

                {/* Options */}
                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {["optionA", "optionB", "optionC", "optionD"].map((optKey) => (
                        <div key={optKey}>
                            <Subheading>{`Option ${optKey.slice(-1)}`}</Subheading>
                            <div className={"mt-4"}>
                                <Input
                                    name={optKey}
                                    required
                                    value={options[optKey]}
                                    onChange={(e) => setOptions({...options, [optKey]: e.target.value})}
                                />
                            </div>
                        </div>
                    ))}
                </section>

                <Divider className="my-10" soft/>

                {/* Answer */}
                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Subheading>Answer</Subheading>
                        <div className={"mt-4"}>
                            <Select
                                name="answer"
                                required
                                value={selectedAnswer}
                                onChange={(e) => setSelectedAnswer(e.target.value)}
                            >
                                <option value="" disabled>Select answer</option>
                                <option value="optionA">Option A</option>
                                <option value="optionB">Option B</option>
                                <option value="optionC">Option C</option>
                                <option value="optionD">Option D</option>
                            </Select>
                        </div>
                    </div>
                </section>

                <Divider className="my-10" soft/>

                {/* Submit */}
                <div className="flex justify-end gap-4 mt-10">
                    <Button type="submit" disabled={UpdateQuestion.isLoading}>Update
                        {UpdateQuestion.isLoading &&
                            <div className={"animate-spin"}>
                                <LoadingIcon/>
                            </div>
                        }
                    </Button>
                </div>
            </form>
        </>
    );
}

