import React, {memo} from 'react';
import "./style.css"
import {Heading, Subheading} from "@/components/heading";
import {Radio, RadioField, RadioGroup} from "@/components/radio";
import {Label} from "@/components/fieldset";
import {CheckIcon, XMarkIcon} from "@heroicons/react/16/solid";

export const QuestionListItemPreview = memo(({item, idx, showAnswer = false, selected = undefined}) => {

    const getSelected = () => {
        if (showAnswer) {
            return item.answer
        } else {
            if (selected !== undefined) {
                return selected[0]?.selected_answer
            } else {
                return ''
            }
        }
    }

    return (<div className={""}>
        <Heading>{idx + 1}. {item.question}</Heading>
        <RadioGroup className={"grid md:grid-cols-2 mt-4"}
                    value={getSelected()}>
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

        {showAnswer &&
            <div className={"mt-4"}>
                <Subheading>Answer : {item.options[item.answer]}</Subheading>
            </div>
        }
        {selected !== undefined &&
            <div className={"mt-4 inline-flex items-center"}>
                {selected[0] ?
                    <Subheading>Selected Answer : <span
                        className={item.answer === selected[0]?.selected_answer ? 'text-green-400' : 'text-red-400'}>{item.options[selected[0]?.selected_answer]}</span>
                    </Subheading> :
                    <Subheading><span
                        className={'text-red-400'}>Not Answered</span>
                    </Subheading>
                }
                {selected[0] &&
                    <>
                        {item.answer === selected[0]?.selected_answer ?
                            <div className={"pl-1"}>
                                <CheckIcon className="size-5" style={{fill: 'rgb(74 222 128)'}}/>
                            </div> :
                            <div className={"pl-1"}>
                                <XMarkIcon className="size-5" style={{fill: 'rgb(248 113 113)'}}/>
                            </div>
                        }</>
                }

            </div>
        }

    </div>);
})