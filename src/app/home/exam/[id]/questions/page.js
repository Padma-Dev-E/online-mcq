'use client'
import {Badge} from '@/components/badge'
import {Heading, Subheading} from '@/components/heading'
import {Link} from '@/components/link'
import {ChevronLeftIcon} from '@heroicons/react/16/solid'
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {QuestionListItemPreview} from "@/components/app/QuestionListItemPreview/QuestionListItemPreview";
import {Divider} from "@/components/divider";
import {Checkbox, CheckboxField} from "@/components/checkbox";
import {Label} from "@/components/fieldset";
import {Button} from "@/components/button";

export default function page({params}) {

    const router = useRouter()

    useEffect(() => {
        document.title = "Questions";
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
                    <Button onClick={() => router.push("/home/exam/asdad/questions/create")}>Add question</Button>
                    <CheckboxField>
                        <Checkbox name="email_is_public" defaultChecked/>
                        <Label>Show answers</Label>
                    </CheckboxField>
                </div>
            </div>

            <Subheading className="mt-12">Questions</Subheading>
            <div className={"mt-4"}>
                <QuestionListItemPreview/>
                <Divider className="my-10" soft/>
                <QuestionListItemPreview/>
            </div>
        </>
    )
}
