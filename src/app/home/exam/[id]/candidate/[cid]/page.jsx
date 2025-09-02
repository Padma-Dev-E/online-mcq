'use client'
import {Badge} from '@/components/badge'
import {Heading, Subheading} from '@/components/heading'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {
    AlterExamCandidateDetailsApi,
    AlterExamDetailsReset,
    ExamCandidateDetailsApi,
    ExamCandidateDetailsReset,
    ExamDetailsApi,
    ExamDetailsReset,
    ExamState,
    ResetExamCandidateDataApi
} from "@/app/redux/examReducer/examReducer";
import {ServerTimeStampToClientTimeStamp} from "@/app/utils/helper";
import {QuestionListItemPreview} from "@/components/app/QuestionListItemPreview/QuestionListItemPreview";
import {Divider} from "@/components/divider";
import {Stat} from "@/components/Stat";
import {Button} from "@/components/button";
import ErrorBox from "@/components/ErrorBox";
import LoadingIcon from "@/components/loading";
import {Alert, AlertActions, AlertDescription, AlertTitle} from "@/components/alert";

export default function page({params}) {

    const router = useRouter()
    const {id, cid} = params
    const dispatch = useDispatch()
    const {ExamDetails, ExamCandidateDetails, AlterExamDetails, ResetExamData} = useSelector(ExamState)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = `Online MCQ | Candidate`;
        }
        dispatch(ExamDetailsApi(id))
        dispatch(ExamCandidateDetailsApi(id, cid))


        return () => {
            dispatch(ExamDetailsReset())
            dispatch(ExamCandidateDetailsReset())
        }
    }, []);

    const [editable, setEditable] = useState(false)

    const [updatedAnswers, setUpdatedAnswers] = useState({})
    const [error, setError] = useState(null)
    const newUpdatedAnswer = (id, value) => {
        setUpdatedAnswers(old => ({...old, [id]: value}))
    }

    const saveEdits = () => {
        const payload = {
            exam_id: id,
            participant_id: cid,
            answers: []
        }
        for (const key in updatedAnswers) {
            if (updatedAnswers.hasOwnProperty(key)) {
                const val = updatedAnswers[key];
                payload.answers.push({question: key, answer: val})
            }
        }
        if (payload.answers.length === 0) {
            setError("No changes detected for update.")
        } else {
            setError(null)
            dispatch(AlterExamCandidateDetailsApi(id, cid, payload))
        }
    }

    const clearEdit = () => {
        setEditable(false)
        setUpdatedAnswers({})
        dispatch(AlterExamDetailsReset())
    }
    const [screenId, setScreenId] = useState(new Date().toLocaleString())

    const cancel = () => {
        clearEdit()
        setScreenId(new Date().toLocaleString())
    }

    useEffect(() => {
        if (AlterExamDetails.data) {
            clearEdit()
        }
    }, [AlterExamDetails]);

    const [reexamConfirmation, setReexamConfirmation] = useState(false)

    if (ExamDetails.isLoading || ExamCandidateDetails.isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Alert open={reexamConfirmation} onClose={() => {
            }}>
                <AlertTitle>
                    Remove all answers
                </AlertTitle>
                <AlertDescription>
                    Once you remove these answers, this action cannot be undone. All responses entered by the candidate
                    will be permanently deleted.
                </AlertDescription>
                <AlertActions>
                    <div className="mt-4 flex gap-4">
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setReexamConfirmation(false)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setReexamConfirmation(false)
                                dispatch(ResetExamCandidateDataApi(id, cid))
                            }}
                        >
                            Proceed
                        </Button>
                    </div>
                </AlertActions>
            </Alert>
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
                            {/*<span>*/}
                            {/*    Duration : {formatMinutes(ExamDetails?.data?.duration)}*/}
                            {/*</span>*/}
                            {ExamDetails?.data?.status !== "active" ?
                                <span>Time
                                                : {new Date(ServerTimeStampToClientTimeStamp(ExamDetails?.data?.start_time)).toLocaleString()}</span>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>

                {editable ?

                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <Button onClick={cancel}>
                            Cancel
                        </Button>
                        <Button onClick={saveEdits} disabled={AlterExamDetails.isLoading}>
                            Save
                            {AlterExamDetails.isLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }
                        </Button>
                    </div>

                    :
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <Button onClick={() => {
                            setReexamConfirmation(true)
                        }}>
                            Re Exam
                            {ResetExamData.isLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }
                        </Button>
                        <Button onClick={() => setEditable(true)}>
                            Edit
                        </Button>
                    </div>
                }
                <div className="flex flex-wrap flex-col items-center gap-6">
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
                    <div>
                        <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                            <span>
                                                Institute : {ExamCandidateDetails?.data?.participant?.institute}
                                            </span>
                        </div>
                        <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                            <span>
                                                Registration : {ExamCandidateDetails?.data?.participant?.registration}
                                            </span>
                        </div>
                        <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                            <span>
                                                Group : {ExamCandidateDetails?.data?.participant?.group}
                                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {error &&
                <ErrorBox message={error}/>
            }

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
                <Stat
                    title="Total marks"
                    value={ExamCandidateDetails?.data?.participant?.marks ?? 0}
                />
            </div>
            <>
                <Subheading className="mt-12">Answer card</Subheading>
                <div className={"mt-4"} key={screenId}>
                    {ExamCandidateDetails?.data?.questions?.length > 0 ?
                        <>{ExamCandidateDetails.data.questions?.map((question, idx) => {
                            return <>
                                <QuestionListItemPreview examId={id} showAnswer={true} item={question}
                                                         editable={editable}
                                                         callback={newUpdatedAnswer}
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
        </>
    )
}
