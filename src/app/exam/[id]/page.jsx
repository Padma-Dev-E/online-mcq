'use client'
import {Badge} from '@/components/badge'
import {Heading, Subheading} from '@/components/heading'
import React, {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import {Divider} from "@/components/divider";
import {useDispatch, useSelector} from "react-redux";
import {AnswerQuestionApi, ExamState, MyQuestionApi} from "@/app/redux/examReducer/examReducer";
import {Button} from "@/components/button";
import {QuestionListItem} from "@/components/app/QuestionListItemPreview/QuestionItem";

export default function page({params}) {
    const router = useRouter()
    const {id} = params
    const dispatch = useDispatch()
    const {MyQuestion, AnswerQuestion} = useSelector(ExamState)

    useEffect(() => {
        document.title = "Questions";
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

            <Subheading className="mt-12">Questions</Subheading>
            <div className={"mt-4"}>
                {MyQuestion.data &&
                    <QuestionListItem item={MyQuestion.data} idx={0} ref={selected}/>
                }
            </div>
            <Divider className="my-10" soft/>
            <div className="flex justify-between">
                <Button type="submit">Submit exam</Button>
                <Button type="submit" onClick={submitAnswer}>Next</Button>
            </div>
        </>
    )
}
