'use client'
import {Badge} from '@/components/badge'
import {Heading, Subheading} from '@/components/heading'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {ExamCandidateDetailsApi, ExamDetailsApi, ExamState} from "@/app/redux/examReducer/examReducer";
import {formatMinutes, ServerTimeStampToClientTimeStamp} from "@/app/utils/helper";
import {QuestionListItemPreview} from "@/components/app/QuestionListItemPreview/QuestionListItemPreview";
import {Divider} from "@/components/divider";
import {Stat} from "@/components/Stat";

export default function page({params}) {

    const router = useRouter()
    const {id, cid} = params
    const dispatch = useDispatch()
    const {ExamDetails, ExamCandidateDetails} = useSelector(ExamState)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = `Online MCQ | Candidate`;
        }
        dispatch(ExamDetailsApi(id))
        dispatch(ExamCandidateDetailsApi(id, cid))
    }, []);

    console.log(ExamCandidateDetails.data)

    return (
        <>

            <div className="max-lg:hidden">
                <div
                    className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400 cursor-pointer"
                    onClick={() => router.push(`/home/exam/${id}/candidate/`)}>
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
                            {ExamDetails?.data?.status !== "active" ?
                                <span>Time
                                                : {new Date(ServerTimeStampToClientTimeStamp(ExamDetails?.data?.start_time)).toLocaleString()}</span>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Heading>{ExamCandidateDetails?.data?.participant?.name}</Heading>
                        </div>
                        <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                            <span>
                                                Mobile : {ExamCandidateDetails?.data?.participant?.mobile}
                                            </span>
                        </div>
                        <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                            <span>
                                                Email : {ExamCandidateDetails?.data?.participant?.email}
                                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
                <Stat
                    title="Total marks"
                    value={ExamCandidateDetails?.data?.participant?.marks ?? 0}
                />
            </div>
            {ExamDetails?.data?.status === "completed" &&
                <>
                    <Subheading className="mt-12">Answer card</Subheading>
                    <div className={"mt-4"}>
                        {ExamCandidateDetails?.data?.questions?.length > 0 ?
                            <>{ExamCandidateDetails.data.questions?.map((question, idx) => {
                                return <>
                                    <QuestionListItemPreview showAnswer={true} item={question}
                                                             selected={ExamCandidateDetails?.data?.selected_answers?.filter(i => i.question_id === question.id)}
                                                             idx={idx}/><Divider
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
            }
        </>
    )
}
