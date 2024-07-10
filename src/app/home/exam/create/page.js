/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 23:51:27
 * Project: sh_mcq_web_next
 */
'use client'
import React from 'react';
import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Text} from "@/components/text";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {ClientTimeStampToServerTimeStamp} from "@/app/utils/helper";

export default function Page() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        if (data.start_time) {
            data.start_time = ClientTimeStampToServerTimeStamp(data.start_time);
        }
        console.log(JSON.stringify(data, null, 2));
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        const offset = now.getTimezoneOffset();
        const localISOTime = new Date(now.getTime() - (offset * 60 * 1000)).toISOString().slice(0, 16);
        return localISOTime;
    };


    return (
        <form method="post" className="mx-auto max-w-4xl" onSubmit={handleSubmit}>
            <Heading>Create new exam</Heading>
            <Divider className="my-10 mt-6"/>

            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Exam title</Subheading>
                </div>
                <div>
                    <Input aria-label="Exam Title" name="exam_name" required/>
                </div>
            </section>

            <Divider className="my-10" soft/>

            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Exam start time</Subheading>
                    <Text>This will only be used for displaying the start time. You have to manually start the
                        exam.</Text>
                </div>
                <div>
                    <Input aria-label="Exam Start Time" name="start_time" type="datetime-local"
                           min={getCurrentDateTime()} required/>
                </div>
            </section>

            <Divider className="my-10" soft/>

            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Exam duration</Subheading>
                    <Text>This is the duration of the exam in minutes.</Text>
                </div>
                <div className="space-y-4">
                    <Input type="number" aria-label="Exam Duration" name="duration" defaultValue="60" required/>
                </div>
            </section>

            <Divider className="my-10" soft/>

            <div className="flex justify-end gap-4">
                <Button type="reset" plain>
                    Reset
                </Button>
                <Button type="submit">Create</Button>
            </div>
        </form>
    );
}
