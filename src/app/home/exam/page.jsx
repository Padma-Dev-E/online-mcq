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
import {
    DuplicateExamApi,
    DuplicateExamReset,
    ExamListReset,
    ExamState,
    listExamApi
} from "@/app/redux/examReducer/examReducer";
import {useRouter} from "next/navigation";
import {ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";
import ErrorBox from "@/components/ErrorBox";
import {Alert, AlertActions, AlertDescription, AlertTitle} from "@/components/alert";


export default function page() {
    const dispatch = useDispatch()
    const {ExamList, DuplicateExam} = useSelector(ExamState)
    const router = useRouter()

    const [search, setSearch] = useState("")

    // Duplicate modal control and state
    const [duplicateModal, setDuplicateModal] = useState(false)
    const [duplicateExamId, setDuplicateExamId] = useState(null)
    const [newExamName, setNewExamName] = useState("")
    const [duplicateError, setDuplicateError] = useState(null)
    const [duplicateLoading, setDuplicateLoading] = useState(false)

    useEffect(() => {
        dispatch(listExamApi(search))
    }, [search]);

    useEffect(() => {
        if (DuplicateExam?.data) {
            dispatch(listExamApi(search))
            setDuplicateLoading(false)
            setDuplicateModal(false)
            setNewExamName("")
            setDuplicateExamId(null)
        }
        return () => {
            dispatch(DuplicateExamReset())
        }
    }, [DuplicateExam?.data]);

    useEffect(() => {
        return () => dispatch(ExamListReset())
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = "Online MCQ | Exams";
        }
    }, []);

    if (ExamList.isLoading) {
        return <p>Loading Exams...</p>
    }

    // Handle duplicate submit
    const handleDuplicateSubmit = async () => {
        if (!newExamName.trim()) {
            setDuplicateError("Please enter a new exam name")
            return
        }
        if (!duplicateExamId) {
            setDuplicateError("Invalid exam to duplicate")
            return
        }

        setDuplicateLoading(true)
        setDuplicateError(null)

        try {
            // Assuming DuplicateExamApi supports promise syntax
            await dispatch(DuplicateExamApi({
                old_exam_id: duplicateExamId,
                new_exam_name: newExamName.trim()
            }))
        } catch (err) {
            setDuplicateLoading(false)
            setDuplicateError(err?.message || "Failed to duplicate exam")
        }
    }

    // Open duplicate modal helper
    const openDuplicateModal = (id) => {
        setDuplicateExamId(id)
        setNewExamName("")
        setDuplicateError(null)
        setDuplicateModal(true)
    }

    return (
        <>
            {/* Duplicate Exam Alert */}
            <Alert open={duplicateModal} onClose={() => setDuplicateModal(false)}>
                <AlertTitle>Duplicate Exam</AlertTitle>
                <AlertDescription>
                    Please enter a new name for the duplicated exam.
                </AlertDescription>

                <div className="mt-2">
                    <Input
                        placeholder="New exam name"
                        value={newExamName}
                        onChange={(e) => setNewExamName(e.target.value)}
                        disabled={duplicateLoading}
                        aria-label="New Exam Name"
                    />
                    {duplicateError && (
                        <p className="mt-1 text-sm text-red-600">{duplicateError}</p>
                    )}
                </div>

                <AlertActions>
                    <div className="mt-4 flex gap-4">
                        <Button
                            disabled={duplicateLoading}
                            onClick={() => setDuplicateModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={duplicateLoading}
                            onClick={handleDuplicateSubmit}
                        >
                            {duplicateLoading ? "Duplicating..." : "Duplicate"}
                        </Button>
                    </div>
                </AlertActions>
            </Alert>

            {ExamList.error && <ErrorBox message={ExamList.error}/>}

            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-sm:w-full sm:flex-1">
                    <Heading>Exams</Heading>
                    <div>
                        <Input
                            aria-label="Exam Title"
                            name="exam_name"
                            onChange={(val) => setSearch(val.target.value)}
                            value={search}
                        />
                    </div>
                </div>

                <Button onClick={() => router.push("/home/exam/create/")}>Create exam</Button>
            </div>

            {ExamList?.data?.length > 0 ? (
                <ul className="mt-10">
                    {ExamList?.data
                        ?.slice()
                        ?.sort((a, b) => b.start_time - a.start_time)
                        .map((event, index) => (
                            <li key={event.id}>
                                <Divider soft={index > 0}/>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-6 py-6">
                                        <div className="space-y-1.5">
                                            <div className="text-base/6 font-semibold">
                                                <Link href={`/home/exam/${event.id}/`}>
                                                    {event.exam_name}
                                                </Link>
                                            </div>
                                            <div className="text-xs/6 text-zinc-500 flex flex-wrap gap-2">
                                                {event.status !== "active" && (
                                                    <span>
                                                        Time :{" "}
                                                        {new Date(
                                                            ServerTimeStampToClientTimeStamp(
                                                                event.start_time,
                                                            ),
                                                        ).toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {event.status === "ongoing" && (
                                            <TimeIndicator
                                                time={timeLeft(event.start_time, event.duration)}
                                            />
                                        )}
                                        <Badge
                                            className="max-sm:hidden"
                                            color={event.status === "ongoing" ? "lime" : "zinc"}
                                        >
                                            {event.status}
                                        </Badge>
                                        <Dropdown>
                                            <DropdownButton plain aria-label="More options">
                                                <EllipsisVerticalIcon/>
                                            </DropdownButton>
                                            <DropdownMenu anchor="bottom end">
                                                <DropdownItem href={`/home/exam/${event.id}/`}>
                                                    View
                                                </DropdownItem>
                                                <DropdownItem
                                                    onClick={() => openDuplicateModal(event.id)}
                                                    role="button"
                                                >
                                                    Duplicate
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            ) : (
                <p>No Exam found</p>
            )}
        </>
    )
}
