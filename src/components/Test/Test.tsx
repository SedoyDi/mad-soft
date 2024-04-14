import AnswerOption from "./AnswerOption/AnswerOption";
import "./Test.css";

interface TestProps {
    finished: boolean
}

function Test({ finished }: TestProps): JSX.Element {
    return (
        <section className="test">
            <form  >
                <h2 className="test__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Placeat quod reprehenderit quas ex velit quia magni blanditiis at tenetur atque nemo
                    eveniet voluptatum exercitationem adipisci, dolor nihil autem nam delectus.</h2>
                <ul className="test__list">
                    <AnswerOption />
                    <AnswerOption />
                    <AnswerOption />
                </ul>
                <button type="submit" className="test__button" disabled={finished}>ответить</button>
            </form>
        </section >
    )
}

export default Test
