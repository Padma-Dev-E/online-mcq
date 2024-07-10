import React, {memo} from 'react';
import "./style.css"
import {Heading, Subheading} from "@/components/heading";
import {Radio, RadioField, RadioGroup} from "@/components/radio";
import {Label} from "@/components/fieldset";

export const QuestionListItemPreview = memo(({showAnswer = false}) => {
    return (<div className={""}>
        <Heading>1. What is your favorite color ?</Heading>
        <RadioGroup className={"grid md:grid-cols-2 mt-4"}>
            <RadioField>
                <Radio name={"o1"}/>
                <Label>Red</Label>
            </RadioField>

            <RadioField>
                <Radio name={"o1"}/>
                <Label>Black</Label>
            </RadioField>

            <RadioField>
                <Radio name={"o1"}/>
                <Label>White</Label>
            </RadioField>

            <RadioField>
                <Radio name={"o1"}/>
                <Label>Green</Label>
            </RadioField>
        </RadioGroup>

        {showAnswer &&
            <div className={"mt-4"}>
                <Subheading>Answer : Red</Subheading>
            </div>
        }

    </div>);
})