import "./NumberOfTopics.css";
import Topic from "./Topic/Topic";
interface NumberOfTopicsProps {
    questionList: {
        active: boolean;
        answer: string;
    }[]
}
function NumberOfTopics({ questionList }: NumberOfTopicsProps): JSX.Element {
    return (
        <section className="number-of-topics">
            <ul className="number-of-topics__list">
                {questionList.map((question, key) => <Topic key={key} question={question} />)}
            </ul>
        </section>
    )
}

export default NumberOfTopics
