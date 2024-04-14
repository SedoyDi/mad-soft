import "./NumberOfTopics.css";
import Topic from "./Topic/Topic";

function NumberOfTopics(): JSX.Element {
    return (
        <section className="number-of-topics">
            <ul className="number-of-topics__list">
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
            </ul>
        </section>
    )
}

export default NumberOfTopics
