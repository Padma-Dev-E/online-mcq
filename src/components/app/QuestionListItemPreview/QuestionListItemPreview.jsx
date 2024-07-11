import React, {memo} from 'react';
import "./style.css"
import {Heading, Subheading} from "@/components/heading";
import {Radio, RadioField, RadioGroup} from "@/components/radio";
import {Label} from "@/components/fieldset";

export const QuestionListItemPreview = memo(({item, idx, showAnswer = false}) => {
    return (<div className={""}>
        <Heading>{idx + 1}. {item.question}</Heading>
        <RadioGroup className={"grid md:grid-cols-2 mt-4"}>
            <RadioField>
                <Radio name={"o1"} checked={false}/>
                <Label>{item.options.optionA}</Label>
            </RadioField>

            <RadioField>
                <Radio name={"o1"}/>
                <Label>{item.options.optionB}</Label>
            </RadioField>

            <RadioField>
                <Radio name={"o1"}/>
                <Label>{item.options.optionC}</Label>
            </RadioField>

            <RadioField>
                <Radio name={"o1"}/>
                <Label>{item.options.optionD}</Label>
            </RadioField>
        </RadioGroup>

        {showAnswer &&
            <div className={"mt-4"}>
                <Subheading>Answer : {item.options[item.answer]}</Subheading>
            </div>
        }

    </div>);
})