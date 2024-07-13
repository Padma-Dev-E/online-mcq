'use client'
import {Stat} from '@/app/home/page'
import {Badge} from '@/components/badge'
import {Button} from '@/components/button'
import {Heading, Subheading} from '@/components/heading'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/table'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {ExamDetailsApi, ExamState, ExamStatusUpdateApi} from "@/app/redux/examReducer/examReducer";
import {formatMinutes, ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";

export default function page({params}) {

    const router = useRouter()
    const {id} = params
    const dispatch = useDispatch()
    const {ExamDetails} = useSelector(ExamState)

    useEffect(() => {
        document.title = "New Page Title";
        dispatch(ExamDetailsApi(id))
    }, []);


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
                            {ExamDetails?.data?.status !== "active" ?
                                <span>Time
                                                : {new Date(ServerTimeStampToClientTimeStamp(ExamDetails?.data?.start_time)).toLocaleString()}</span>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
                {ExamDetails?.data?.status === "active" &&
                    <div className="flex gap-4">
                        <Button outline onClick={() => router.push(`/home/exam/${id}/edit/`)}>Edit</Button>
                        <Button onClick={() => {
                            dispatch(ExamStatusUpdateApi(id, {status: "ongoing"}))
                        }}>Start Exam</Button>
                    </div>
                }

                {ExamDetails?.data?.status === "ongoing" &&
                    <TimeIndicator time={timeLeft(ExamDetails?.data?.start_time, ExamDetails?.data?.duration)}/>
                }
                {ExamDetails?.data?.status === "ongoing" &&
                    <div className="flex gap-4">
                        <Button onClick={() => {
                            dispatch(ExamStatusUpdateApi(id, {status: "completed"}))
                        }}>End Exam</Button>
                    </div>
                }

            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
                <div className={"cursor-pointer"} onClick={() => router.push(`/home/exam/${id}/questions`)}>
                    <Stat
                        title="Questions"
                        value={ExamDetails?.data?.total_questions ?? 0}
                    />
                </div>
                <div className={"cursor-pointer"} onClick={() => router.push(`/home/exam/${id}/candidate`)}>
                    <Stat title="Candidates" value={ExamDetails?.data?.participants_count ?? 0}/>
                </div>
            </div>
            {ExamDetails?.data?.status === "completed" &&
                <>
                    <Subheading className="mt-12">Top rankers</Subheading>
                    <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
                        <TableHead>
                            <TableRow>
                                <TableHeader>Rank</TableHeader>
                                <TableHeader>Mark</TableHeader>
                                <TableHeader>Name</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ExamDetails?.data?.top_participants?.map((order, idx) => (
                                <TableRow key={order.id} href={`/home/exam/${id}/candidate/${order.id}/`}>
                                    <TableCell>{idx + 1}</TableCell>
                                    <TableCell className="text-zinc-500">{order.marks}</TableCell>
                                    <TableCell>{order.name}</TableCell>
                                    {/*<TableCell className="text-right">US{order}</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table></>
            }
        </>
    )
}
