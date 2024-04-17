import { useState } from "react";
import "./TestFormComponent.css";
import TestInput from "./TestInput/TestInput";


function TestFormComponent({ finished, question, goToNextQuestion, addAnswer }: any): JSX.Element {

    const [value, setValue] = useState('');

    function chengeValue(event: any) {
        if (question.answerType === "textarea" || question.answerType === "text") {
            setValue(event.target.value);
        } else if (question.answerType === "radio") {
            setValue(event.target.value);
        } else if (question.answerType === "checkbox") {
            if (value.includes(event.target.value)) {
                setValue(value.replace(` ${event.target.value}`, ''));
                return
            }
            setValue(`${value} ${event.target.value}`);
            return
        }
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (!finished) {
            goToNextQuestion(question.id);
            addAnswer(question.id, value);
        }
    }

    return (
        <section className="test-form">
            <h2 className="test-form__title">{question.question}</h2>
            <form onSubmit={onSubmit}>
                {question.variant.map((variant: { checked: boolean, name: string, label: string }, key: number) => (
                    <div key={key} className="test-form__input-list">
                        <TestInput
                            answerType={question.answerType}
                            name={variant.name}
                            label={variant.label}
                            onChange={chengeValue}
                            value={value} />
                    </div>
                )
                )}
                <button className="test-form__button" type="submit" disabled={finished}>Submit</button>
            </form>
        </section >

    )
};

export default TestFormComponent;
