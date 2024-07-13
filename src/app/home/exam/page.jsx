'use client'
import {Badge} from '@/components/badge'
import {Button} from '@/components/button'
import {Divider} from '@/components/divider'
import {Dropdown, DropdownButton, DropdownItem, DropdownMenu} from '@/components/dropdown'
import {Heading} from '@/components/heading'
import {Input, InputGroup} from '@/components/input'
import {Link} from '@/components/link'
import {Select} from '@/components/select'
import {EllipsisVerticalIcon, MagnifyingGlassIcon} from '@heroicons/react/16/solid'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ExamState, listExamApi} from "@/app/redux/examReducer/examReducer";
import {useRouter} from "next/navigation";
import {formatMinutes, ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";


export default function page() {
    const dispatch = useDispatch()
    const {ExamList} = useSelector(ExamState)
    const router = useRouter()

    useEffect(() => {
        dispatch(listExamApi())
    }, []);

    return (
        <>
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-sm:w-full sm:flex-1">
                    <Heading>Exams</Heading>
                    <div className="mt-4 flex max-w-xl gap-4">
                        <div className="flex-1">
                            <InputGroup>
                                <MagnifyingGlassIcon/>
                                <Input name="search" placeholder="Search events&hellip;"/>
                            </InputGroup>
                        </div>
                        <div>
                            <Select name="sort_by">
                                <option value="name">All</option>
                                <option value="name">Completed</option>
                                <option value="status">OnGoing</option>
                                <option value="date">Active</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <Button onClick={() => {
                    router.push("/home/exam/create/")
                }}>Create event</Button>
            </div>
            <ul className="mt-10">
                {ExamList.data?.map((event, index) => (
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
                                            <span>
                                                Duration : {formatMinutes(event.duration)}
                                            </span>
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
            </ul>
        </>
    )
}
