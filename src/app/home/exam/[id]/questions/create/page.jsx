/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 23:51:27
 * Project: sh_mcq_web_next
 */
'use client'
import React, {useEffect} from 'react';
import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {ClientTimeStampToServerTimeStamp} from "@/app/utils/helper";
import {ChevronLeftIcon} from "@heroicons/react/16/solid";
import {Badge} from "@/components/badge";
import {Checkbox, CheckboxField} from "@/components/checkbox";
import {Label} from "@/components/fieldset";
import {Textarea} from "@/components/textarea";
import {Select} from "@/components/select";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {createQuestionApi, ExamState, QuestionCreateReset} from "@/app/redux/examReducer/examReducer";


export default function Page({params}) {
    const router = useRouter();

    const dispatch = useDispatch()

    const {id} = params

    const {QuestionCreate} = useSelector(ExamState)

    useEffect(() => {
        if (QuestionCreate.data) {
            dispatch(QuestionCreateReset())
            router.push(`/home/exam/${id}/questions`)
        }
    }, [QuestionCreate.data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        if (data.start_time) {
            data.start_time = ClientTimeStampToServerTimeStamp(data.start_time);
        }

        const payload = {
            question: data.question,
            options: {
                optionA: data.optionA,
                optionB: data.optionB,
                optionC: data.optionC,
                optionD: data.optionD
            },
            answer: data.answer,
            exam_id: id
        }
        dispatch(createQuestionApi(payload))
    };


    return (
        <>
            <div className="max-lg:hidden">
                <div
                    className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400 cursor-pointer"
                    onClick={() => router.back()}>
                    <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500"/>
                    Back
                </div>
            </div>
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
                <div className="flex gap-4">
                    <Button onClick={() => router.push("/home/exam/asdad/questions/create")}>Add question</Button>
                    <CheckboxField>
                        <Checkbox name="email_is_public" defaultChecked/>
                        <Label>Show answers</Label>
                    </CheckboxField>
                </div>
            </div>

            <form method="post" className="mx-auto mt-4" onSubmit={handleSubmit}>
                <Heading>Add question</Heading>
                <Divider className="my-10 mt-6"/>

                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Subheading>Question</Subheading>
                        <div className={"mt-4"}>
                            <Textarea aria-label="Exam Title" name="question" required/>
                        </div>
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Subheading>Option A</Subheading>
                        <div className={"mt-4"}>
                            <Input name="optionA" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Option B</Subheading>
                        <div className={"mt-4"}>
                            <Input name="optionB" required/>
                        </div>
                    </div>

                    <div>
                        <Subheading>Option C</Subheading>
                        <div className={"mt-4"}>
                            <Input name="optionC" required/>
                        </div>
                    </div>
                    <div>
                        <Subheading>Option D</Subheading>
                        <div className={"mt-4"}>
                            <Input name="optionD" required/>
                        </div>
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <Subheading>Answer</Subheading>
                        <div className={"mt-4"}>
                            <Select name="answer" required>
                                <option selected disabled>Select answer</option>
                                <option value="optionA">Option A</option>
                                <option value="optionB">Option B</option>
                                <option value="optionC">Option C</option>
                                <option value="optionD">Option D</option>
                            </Select>
                        </div>
                    </div>
                </section>

                <Divider className="my-10" soft/>

                <div className="flex justify-end gap-4">
                    <Button type="reset" plain>
                        Reset
                    </Button>
                    <Button type="submit">Create</Button>
                </div>
            </form>
        </>
    );
}
