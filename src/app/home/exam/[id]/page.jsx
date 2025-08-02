'use client'
import {Badge} from '@/components/badge'
import {Button} from '@/components/button'
import {Heading, Subheading} from '@/components/heading'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/table'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {
    downloadCSV,
    ExamDetailsApi,
    ExamDetailsReset,
    ExamState,
    ExamStatusUpdateApi
} from "@/app/redux/examReducer/examReducer";
import {ServerTimeStampToClientTimeStamp, timeLeft} from "@/app/utils/helper";
import TimeIndicator from "@/components/timer";
import {Stat} from "@/components/Stat";
import LoadingIcon from "@/components/loading";
import QRCode from "react-qr-code";
import {toPng} from "html-to-image";
import {Alert, AlertActions, AlertDescription, AlertTitle} from "@/components/alert";

export default function page({params}) {

    const router = useRouter()
    const {id} = params
    const dispatch = useDispatch()
    const {ExamDetails} = useSelector(ExamState)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = "Online MCQ | Exam";
        }
        dispatch(ExamDetailsApi(id))
        return () => dispatch(ExamDetailsReset())
    }, []);

    useEffect(() => {
        if (ExamDetails.data) {
            if (typeof window !== 'undefined') {
                document.title = `Online MCQ | ${ExamDetails?.data?.exam_name}`;
            }
        }
    }, [ExamDetails]);

    const getFileName = () => {
        const topic = ExamDetails?.data?.exam_name ?? "MCQ ONLINE"
        return topic.replaceAll(" ", "_").toLowerCase() + ".png"
    }

    const getUrl = () => {
        return `https://${window.location.host}/exam/${id}/join/`
    }

    const qrCodeDiv = useRef(null);
    const [qrLoading, setQrLoading] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText(getUrl()).then(() => {
            alert('Url copied');
        }).catch((err) => {
            alert('Failed to copy url');
        });
    };
    const saveQrCode = () => {
        if (qrCodeDiv.current !== null) {
            setQrLoading(true)
            toPng(qrCodeDiv.current, {cacheBust: false, pixelRatio: 1})
                .then((dataUrl) => {
                    if (typeof window !== 'undefined') {
                        const link = document.createElement('a')
                        link.download = getFileName()
                        link.href = dataUrl
                        link.click()
                    }
                    setQrLoading(false)
                })
                .catch((err) => {
                    setQrLoading(false)
                })
        }
    }

    const [downloadCSVLoading, setDownloadCSVLoading] = useState(false);
    const downloadExamParticipantsCSV = async () => {
        try {
            if (typeof window !== 'undefined') {
                setDownloadCSVLoading(true)
                const csvBlob = await downloadCSV(`/exam/${id}/participants/csv/`);
                const url = window.URL.createObjectURL(new Blob([csvBlob], {type: 'text/csv'}));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${ExamDetails?.data?.exam_name?.replaceAll(' ', '_').toLowerCase()}_exam_report.csv`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                setDownloadCSVLoading(false)
            }
        } catch (error) {
            // console.error('Failed to download CSV:', error);
        }
    };
    const [restartExam, setRestartExam] = useState(false)
    const [startExam, setStartExam] = useState(false)
    const [endExam, setEndExam] = useState(false)

    if (ExamDetails.isLoading) {
        return <p>Loading Exam details...</p>
    }
    return (
        <>
            <Alert open={restartExam} onClose={() => {
            }}>
                <AlertTitle>
                    Restart Exam
                </AlertTitle>
                <AlertDescription>
                    By restarting the exam, candidates will be able to rejoin and complete it. The exam will remain
                    active until you end it again.
                </AlertDescription>
                <AlertActions>
                    <div className="mt-4 flex gap-4">
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setRestartExam(false)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setRestartExam(false)
                                dispatch(ExamStatusUpdateApi(id, {status: "ongoing"}))
                            }}
                        >
                            Proceed
                        </Button>
                    </div>
                </AlertActions>
            </Alert>


            <Alert open={startExam} onClose={() => {
            }}>
                <AlertTitle>
                    Start Exam
                </AlertTitle>
                <AlertDescription>
                    By starting the exam, candidates will be able to join and complete it. The exam will remain
                    active until you end it again.
                </AlertDescription>
                <AlertActions>
                    <div className="mt-4 flex gap-4">
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setStartExam(false)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setStartExam(false)
                                dispatch(ExamStatusUpdateApi(id, {status: "ongoing"}))
                            }}
                        >
                            Proceed
                        </Button>
                    </div>
                </AlertActions>
            </Alert>


            <Alert open={endExam} onClose={() => {
            }}>
                <AlertTitle>
                    End Exam
                </AlertTitle>
                <AlertDescription>
                    By ending the exam, candidates will no longer be able to join or complete it.
                </AlertDescription>
                <AlertActions>
                    <div className="mt-4 flex gap-4">
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setEndExam(false)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                            onClick={() => {
                                setEndExam(false)
                                dispatch(ExamStatusUpdateApi(id, {status: "completed"}))
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
                    onClick={() => router.push(`/home/exam/`)}>
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
                {ExamDetails?.data?.status === "active" &&
                    <div className="flex gap-4">
                        <Button outline onClick={() => router.push(`/home/exam/${id}/edit/`)}>Edit</Button>
                        <Button onClick={saveQrCode} disabled={qrLoading}>
                            Save QR

                            {qrLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }
                        </Button>
                        <Button onClick={handleCopy}>
                            Copy URL
                        </Button>
                        <Button disabled={ExamDetails.isLoading} onClick={() => {
                            setStartExam(true)
                        }}>Start Exam

                            {ExamDetails.isLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }

                        </Button>
                    </div>
                }

                {ExamDetails?.data?.status === "ongoing" &&
                    <TimeIndicator time={timeLeft(ExamDetails?.data?.start_time, ExamDetails?.data?.duration)}/>
                }
                {ExamDetails?.data?.status === "ongoing" &&
                    <div className="flex gap-4">
                        <Button onClick={saveQrCode} disabled={qrLoading}>
                            Save QR

                            {qrLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }
                        </Button>
                        <Button onClick={handleCopy}>
                            Copy URL
                        </Button>
                        <Button disabled={ExamDetails.isLoading} onClick={() => {
                            setEndExam(true)
                        }}>End Exam

                            {ExamDetails.isLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }

                        </Button>
                    </div>
                }

                {ExamDetails?.data?.status === "completed" &&
                    <div className="flex gap-4">
                        <Button onClick={saveQrCode} disabled={qrLoading}>
                            Save QR

                            {qrLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }
                        </Button>
                        <Button onClick={handleCopy}>
                            Copy URL
                        </Button>
                        <Button disabled={ExamDetails.isLoading} onClick={() => {
                            setRestartExam(true)
                        }}>Restart Exam Again

                            {ExamDetails.isLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }

                        </Button>
                        <Button onClick={downloadExamParticipantsCSV}>
                            Download report

                            {downloadCSVLoading &&
                                <div className={"animate-spin"}>
                                    <LoadingIcon/>
                                </div>
                            }
                        </Button>
                    </div>
                }

                <div className={"absolute"} style={{left: -1000}}>
                    <div style={{width: 224}} className={"bg-white pl-3  pr-3 pb-3 pt-1 flex-col"} ref={qrCodeDiv}>
                        <p className={"text-black text-lg font-semi-bold text-wrap"}>Online MCQ</p>
                        <QRCode
                            size={256}
                            style={{height: 200, width: 200, paddingTop: 1}}
                            value={getUrl()}
                            viewBox={`0 0 256 256`}
                        />
                        <p className={"text-black text-wrap pt-2"} style={{
                            fontSize: 13.5,
                            wordBreak: 'break-all',
                            overflowWrap: 'break-word',
                            fontWeight: "bold"
                        }}>{ExamDetails?.data?.exam_name}</p>
                        {/*<p className={"text-gray-700 text-wrap text-sm"}>Duration*/}
                        {/*    : {formatMinutes(ExamDetails?.data?.duration)}</p>*/}
                        <a
                            className="text-blue-500 pt-2"
                            style={{
                                fontSize: 13,
                                wordBreak: 'break-all',
                                overflowWrap: 'break-word'
                            }}
                            href={getUrl()}
                        >
                            {getUrl()}
                        </a>

                    </div>
                </div>


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
                            {ExamDetails?.data?.top_participants?.slice()?.sort((a, b) => b.marks - a.marks)?.map((order, idx) => (
                                <TableRow key={order.id} href={`/home/exam/${id}/candidate/${order.id}/`}>
                                    <TableCell>{idx + 1}</TableCell>
                                    <TableCell className="text-zinc-500">{order.marks}</TableCell>
                                    <TableCell>{order.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table></>
            }
        </>
    )
}
