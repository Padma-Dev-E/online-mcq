'use client'
import {Heading, Subheading} from '@/components/heading'
import React, {useEffect, useRef} from "react";
import {Divider} from "@/components/divider";
import {useDispatch, useSelector} from "react-redux";
import {
    AnswerQuestionApi,
    AnswerQuestionReset,
    ExamPublicDetailsApi,
    ExamPublicDetailsReset,
    ExamState,
    MyQuestionApi,
    MyQuestionReset
} from "@/app/redux/examReducer/examReducer";
import {Button} from "@/components/button";
import {QuestionListItem} from "@/components/app/QuestionListItemPreview/QuestionItem";
import {formatMinutes, ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";
import ErrorBox from "@/components/ErrorBox";
import LoadingIcon from "@/components/loading";

export default function page({params}) {
    const {id} = params
    const dispatch = useDispatch()
    const {MyQuestion, ExamPublicDetails, AnswerQuestion} = useSelector(ExamState)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = "Online MCQ";
        }
        dispatch(ExamPublicDetailsApi(id))
        dispatch(MyQuestionApi(id))

        return () => {
            dispatch(ExamPublicDetailsReset())
            dispatch(MyQuestionReset())
            dispatch(AnswerQuestionReset())
        }
    }, []);

    useEffect(() => {
        if (ExamPublicDetails.data) {
            if (typeof window !== 'undefined') {
                document.title = `Online MCQ | ${ExamPublicDetails?.data?.exam_name}`;
            }
        }
    }, [ExamPublicDetails]);

    const selected = useRef()
    const submitAnswer = () => {
        const t1 = selected.current.getSelected()
        const payload = {
            answer: t1,
            question: MyQuestion?.data?.id
        }
        if (!t1) {
            alert("Invalid option")
        } else {
            dispatch(AnswerQuestionApi(payload))
        }

    }

    return (
        <>
            {(MyQuestion.error || ExamPublicDetails.error || AnswerQuestion.error) &&
                <ErrorBox message={MyQuestion.error || ExamPublicDetails.error || AnswerQuestion.error}/>
            }


            {MyQuestion?.data === -1 ?
                <div className="text-center text-white mt-10">
                    <Heading>Congratulations!</Heading>
                    <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                        You have successfully completed the exam. Thank you for your participation!
                    </p>
                    <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                        Your answers have been submitted and will be evaluated shortly.
                    </p>
                </div> :
                <>
                    <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-6">
                            <div>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <Heading>{ExamPublicDetails?.data?.exam_name}</Heading>
                                </div>
                                <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                            <span>
                                                Duration : {formatMinutes(ExamPublicDetails?.data?.duration)}
                                            </span>
                                    {ExamPublicDetails?.data?.status !== "active" ?
                                        <span>Time
                                                : {new Date(ServerTimeStampToClientTimeStamp(ExamPublicDetails?.data?.start_time)).toLocaleString()}</span>
                                        :
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                        {ExamPublicDetails?.data?.status === "ongoing" &&
                            <TimeIndicator
                                time={timeLeft(ExamPublicDetails?.data?.start_time, ExamPublicDetails?.data?.duration)}/>
                        }
                    </div>

                    {(MyQuestion?.data !== -1 && MyQuestion?.data !== null) &&
                        <>
                            <Subheading className="mt-12">Questions
                                ({MyQuestion?.data?.question_number + 1}/{ExamPublicDetails?.data?.total_questions})</Subheading>
                            <div className={"mt-4"} key={MyQuestion?.data?.id}>
                                {MyQuestion.data &&
                                    <QuestionListItem item={MyQuestion.data} ref={selected}/>
                                }
                            </div>
                            <Divider className="my-10" soft/>
                            <div className="flex justify-end">
                                <Button type="submit"
                                        disabled={MyQuestion.isLoading || ExamPublicDetails.isLoading || AnswerQuestion.isLoading}
                                        onClick={submitAnswer}>{MyQuestion?.data?.question_number === ExamPublicDetails?.data?.total_questions - 1 ? 'Submit' : 'Next'}
                                    {(MyQuestion.isLoading || ExamPublicDetails.isLoading || AnswerQuestion.isLoading) &&
                                        <div className={"animate-spin"}>
                                            <LoadingIcon/>
                                        </div>
                                    }

                                </Button>
                            </div>
                        </>
                    }</>
            }
        </>
    )
}
