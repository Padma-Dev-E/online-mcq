'use client'
import {Badge} from '@/components/badge'
import {Heading, Subheading} from '@/components/heading'
import React, {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import {Divider} from "@/components/divider";
import {useDispatch, useSelector} from "react-redux";
import {AnswerQuestionApi, ExamPublicDetailsApi, ExamState, MyQuestionApi} from "@/app/redux/examReducer/examReducer";
import {Button} from "@/components/button";
import {QuestionListItem} from "@/components/app/QuestionListItemPreview/QuestionItem";
import {formatMinutes, ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";

export default function page({params}) {
    const router = useRouter()
    const {id} = params
    const dispatch = useDispatch()
    const {MyQuestion, ExamPublicDetails} = useSelector(ExamState)

    useEffect(() => {
        document.title = "Questions";
        dispatch(ExamPublicDetailsApi(id))
        dispatch(MyQuestionApi(id))
    }, []);


    const selected = useRef()


    const submitAnswer = () => {
        const t1 = selected.current.getSelected()
        const payload = {
            answer: t1,
            question: MyQuestion?.data?.id
        }

        dispatch(AnswerQuestionApi(payload))
    }

    return (
        <>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Heading>{ExamPublicDetails?.data?.exam_name}</Heading>
                            <Badge
                                color={ExamPublicDetails?.data?.status === 'ongoing' ? 'lime' : 'zinc'}>{ExamPublicDetails?.data?.status}</Badge>
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

            <Subheading className="mt-12">Questions
                ({MyQuestion?.data?.question_number}/{ExamPublicDetails?.data?.total_questions - 1})</Subheading>
            <div className={"mt-4"} key={MyQuestion?.data?.id}>
                {MyQuestion.data &&
                    <QuestionListItem item={MyQuestion.data} idx={0} ref={selected}/>
                }
            </div>
            <Divider className="my-10" soft/>
            <div className="flex justify-end">
                <Button type="submit"
                        onClick={submitAnswer}>{MyQuestion?.data?.question_number === ExamPublicDetails?.data?.total_questions - 1 ? 'Submit' : 'Next'}</Button>
            </div>
        </>
    )
}
