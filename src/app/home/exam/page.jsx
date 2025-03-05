'use client'
import {Badge} from '@/components/badge'
import {Button} from '@/components/button'
import {Divider} from '@/components/divider'
import {Dropdown, DropdownButton, DropdownItem, DropdownMenu} from '@/components/dropdown'
import {Heading} from '@/components/heading'
import {Input} from '@/components/input'
import {Link} from '@/components/link'
import {EllipsisVerticalIcon} from '@heroicons/react/16/solid'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ExamState, listExamApi} from "@/app/redux/examReducer/examReducer";
import {useRouter} from "next/navigation";
import {ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";
import ErrorBox from "@/components/ErrorBox";


export default function page() {
    const dispatch = useDispatch()
    const {ExamList} = useSelector(ExamState)
    const router = useRouter()

    const [search, setSearch] = useState("")

    useEffect(() => {
        dispatch(listExamApi(search))
    }, [search]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = "Online MCQ | Exams";
        }
    }, []);

    return (
        <>
            {ExamList.error &&
                <ErrorBox message={ExamList.error}/>
            }
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-sm:w-full sm:flex-1">
                    <Heading>Exams</Heading>
                    <div>
                        <Input aria-label="Exam Title" name="exam_name" onChange={(val) => {
                            setSearch(val.target.value)
                        }}/>
                    </div>
                </div>


                <Button onClick={() => {
                    router.push("/home/exam/create/")
                }}>Create exam</Button>
            </div>
            {ExamList?.data?.length > 0 ?
                <ul className="mt-10">
                    {ExamList?.data?.slice()?.sort((a, b) => b.start_time - a.start_time).map((event, index) => (
                        <>
                            <li key={event.id}>
                                <Divider soft={index > 0}/>
                                <div className="flex items-center justify-between">
                                    <div key={event.id} className="flex gap-6 py-6">
                                        <div className="space-y-1.5">
                                            <div className="text-base/6 font-semibold">
                                                <Link href={`/home/exam/${event.id}/`}>{event.exam_name}</Link>
                                            </div>
                                            <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                                {/*<span>*/}
                                                {/*    Duration : {formatMinutes(event.duration)}*/}
                                                {/*</span>*/}
                                                {event.status !== "active" &&
                                                    <span>Time
                                                : {new Date(ServerTimeStampToClientTimeStamp(event.start_time)).toLocaleString()}</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {event.status === "ongoing" &&
                                            <TimeIndicator time={timeLeft(event.start_time, event.duration)}/>
                                        }
                                        <Badge className="max-sm:hidden"
                                               color={event.status === 'ongoing' ? 'lime' : 'zinc'}>
                                            {event.status}
                                        </Badge>
                                        <Dropdown>
                                            <DropdownButton plain aria-label="More options">
                                                <EllipsisVerticalIcon/>
                                            </DropdownButton>
                                            <DropdownMenu anchor="bottom end">
                                                <DropdownItem href={`/home/exam/${event.id}/`}>View</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </li>
                        </>
                    ))}
                </ul> :
                <p>No Exam found</p>
            }
        </>
    )
}
