import "./TestInput.css";

interface TestInputProps {
    value: string;
    answerType: string;
    name: string;
    label: string;
    onChange: (event: any) => void;
}

function TestInput({ value, answerType, name, label, onChange }: TestInputProps) {

    const initialValue = (answerType === "radio" || answerType === "checkbox")
        ? label
        : value;

    const checked = (answerType === "radio")
        ? (value === initialValue)
        : (value.includes(initialValue));

    return (
        answerType === "textarea"
            ? <textarea name={name} className='textarea' onChange={onChange} />
            : <div className="input-container">
                <input
                    type={answerType}
                    name={name}
                    className='input'
                    onChange={onChange}
                    checked={checked}
                    value={initialValue} />
                <label htmlFor={name}>{label}</label>
            </div>
    );
}

export default TestInput;
