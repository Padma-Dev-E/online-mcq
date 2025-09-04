import React, {forwardRef, memo, useImperativeHandle, useState} from 'react';
import "./style.css";
import {Heading} from "@/components/heading";
import {Radio, RadioField, RadioGroup} from "@/components/radio";
import {Label} from "@/components/fieldset";
import {ImagePreviewWithModal} from "@/components/ImagePreviewWithModal";

export const QuestionListItem = memo(forwardRef(({item, idx}, ref) => {

    const [selected, setSelected] = useState(null)

    useImperativeHandle(ref, () => ({
        getSelected: () => selected
    }));


    return (
        <div>
            <Heading>{item.count_number + 1}. {item.question}</Heading>
            <ImagePreviewWithModal imageUrl={item?.question_picture}/>
            <RadioGroup className={"grid md:grid-cols-2 mt-4"} value={selected} onChange={setSelected}>
                <RadioField>
                    <Radio value={"optionA"}/>
                    <Label>{item.options.optionA}</Label>
                </RadioField>

                <RadioField>
                    <Radio value={"optionB"}/>
                    <Label>{item.options.optionB}</Label>
                </RadioField>

                <RadioField>
                    <Radio value={"optionC"}/>
                    <Label>{item.options.optionC}</Label>
                </RadioField>

                <RadioField>
                    <Radio value={"optionD"}/>
                    <Label>{item.options.optionD}</Label>
                </RadioField>
            </RadioGroup>
        </div>
    );
}));
