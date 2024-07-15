'use client'
import {Badge} from '@/components/badge'
import {Heading} from '@/components/heading'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/table'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {ExamCandidateApi, ExamDetailsApi, ExamState} from "@/app/redux/examReducer/examReducer";
import {formatMinutes, ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";

export default function page({params}) {

    const router = useRouter()
    const {id} = params
    const dispatch = useDispatch()
    const {ExamDetails, ExamCandidate} = useSelector(ExamState)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = `Online MCQ | Candidates`;
        }
        dispatch(ExamDetailsApi(id))
        dispatch(ExamCandidateApi(id))
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

                {ExamDetails?.data?.status === "ongoing" &&
                    <TimeIndicator time={timeLeft(ExamDetails?.data?.start_time, ExamDetails?.data?.duration)}/>
                }
            </div>

            <>
                <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
                    <TableHead>
                        <TableRow>
                            <TableHeader>Rank</TableHeader>
                            <TableHeader>Mark</TableHeader>
                            <TableHeader>Name</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ExamCandidate?.data?.map((order, idx) => (
                            <TableRow key={order.id} href={`/home/exam/${id}/candidate/${order.id}/`}>
                                <TableCell>{idx + 1}</TableCell>
                                <TableCell className="text-zinc-500">{order.marks}</TableCell>
                                <TableCell>{order.name}</TableCell>
                                {/*<TableCell className="text-right">US{order}</TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table></>
        </>
    )
}
