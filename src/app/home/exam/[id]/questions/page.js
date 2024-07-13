'use client'
import {Badge} from '@/components/badge'
import {Heading, Subheading} from '@/components/heading'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {QuestionListItemPreview} from "@/components/app/QuestionListItemPreview/QuestionListItemPreview";
import {Divider} from "@/components/divider";
import {Checkbox, CheckboxField} from "@/components/checkbox";
import {Label} from "@/components/fieldset";
import {Button} from "@/components/button";
import {useDispatch, useSelector} from "react-redux";
import {ExamDetailsApi, ExamState, listQuestionApi} from "@/app/redux/examReducer/examReducer";
import {formatMinutes, ServerTimeStampToClientTimeStamp} from "@/app/utils/helper";

export default function page({params}) {
    const router = useRouter()
    const {id} = params
    const dispatch = useDispatch()
    const {QuestionList, ExamDetails} = useSelector(ExamState)

    useEffect(() => {
        document.title = "Questions";
        dispatch(listQuestionApi(id))
        dispatch(ExamDetailsApi(id))
    }, []);

    const [showAnswers, setShowAnswers] = useState(false);

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
                    <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Heading>{ExamDetails?.data?.exam_name}</Heading>
                            <Badge
                                color={ExamDetails?.data?.status === 'ongoing' ? 'lime' : 'zinc'}>{ExamDetails?.data?.status}</Badge>
                        </div>
                        <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                            <span>
                                                Duration : {formatMinutes(ExamDetails?.data?.duration)}
                                            </span>
                            {ExamDetails?.data?.status !== "active" &&
                                <span>Time
                                                : {new Date(ServerTimeStampToClientTimeStamp(ExamDetails?.data?.start_time)).toLocaleString()}</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    {ExamDetails?.data?.status === "active" &&
                        <Button onClick={() => router.push(`/home/exam/${id}/questions/create`)}>Add question</Button>
                    }
                    <CheckboxField>
                        <Checkbox name="email_is_public" checked={showAnswers} onChange={() => {
                            setShowAnswers(old => !old)
                        }}/>
                        <Label>Show answers</Label>
                    </CheckboxField>
                </div>
            </div>

            <Subheading className="mt-12">Questions</Subheading>
            <div className={"mt-4"}>
                {QuestionList.data?.length > 0 ?
                    <>{QuestionList.data?.map((question, idx) => {
                        return <><QuestionListItemPreview showAnswer={showAnswers} item={question} idx={idx}/><Divider
                            className="my-10" soft/></>
                    })}</> :
                    <>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <p>No questions found add new</p>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
