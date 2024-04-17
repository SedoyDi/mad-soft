import "./Topic.css";
interface TopicProps {
    question: {
        active: boolean;
        answer: string;
    }
}
function Topic({ question }: TopicProps): JSX.Element {

    const className = question.active
        ? "topic active "
        : (question.answer
            ? "topic finished "
            : "topic");

    return (
        <li className={className}>
        </li>
    )
}

export default Topic
