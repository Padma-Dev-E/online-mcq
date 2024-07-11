'use client'
import {Stat} from '@/app/home/page'
import {Badge} from '@/components/badge'
import {Button} from '@/components/button'
import {Heading, Subheading} from '@/components/heading'
import {Link} from '@/components/link'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/table'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function page({params}) {

    const router = useRouter()

    useEffect(() => {
        document.title = "New Page Title";
    }, []);

    return (
        <>
            <div className="max-lg:hidden">
                <Link href="/events"
                      className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
                    <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500"/>
                    Exams
                </Link>
            </div>
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
                <div className="flex gap-4">
                    <Button outline>Edit</Button>
                    <Button>View</Button>
                </div>
            </div>
            <Subheading className="mt-12">Top rankers</Subheading>
            <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
                <TableHead>
                    <TableRow>
                        <TableHeader>Rank</TableHeader>
                        <TableHeader>Mark</TableHeader>
                        <TableHeader>Name</TableHeader>
                        {/*<TableHeader className="text-right">Amount</TableHeader>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[1, 1, 1, 1, 1,].map((order) => (
                        <TableRow key={order} href={"order"} title={`Order #${order}`}>
                            <TableCell>{order}</TableCell>
                            <TableCell className="text-zinc-500">{order}</TableCell>
                            <TableCell>{order}</TableCell>
                            {/*<TableCell className="text-right">US{order}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
