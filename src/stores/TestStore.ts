import { makeAutoObservable, observable } from "mobx";
interface QuestionList {
    id: number;
    active: boolean;
    question: string;
    answer: string;
    answerType: string;
    variant: {
        name: string;
        label: string;
    }[]
}
export class TestStore {
    constructor() {
        makeAutoObservable(this, {
            questionList: observable.deep
        });
    }

    completed: boolean = false
    questionList: QuestionList[] = []

    setCompleted = (value: boolean) => {
        this.completed = value
    }

    setQuestionList = (value: QuestionList[]) => {
        this.questionList = value
    }

    goToNextQuestion = (id: number) => {
        let indexEl = this.questionList.findIndex(question => question.id === id);

        this.questionList.forEach((question) => {
            question.active = false;
        });

        indexEl++;
        if (indexEl < this.questionList.length) {
            this.questionList[indexEl].active = true;
        } else {
            this.completed = true;
            localStorage.setItem(
                "localCompleted",
                JSON.stringify(this.completed)
            );
            return
        }

        localStorage.setItem(
            "localQuestionList",
            JSON.stringify(this.questionList)
        );
    }

    addAnswer = (id: number, answer: string) => {
        this.questionList.forEach((question) => {
            if (question.id === id) {
                question.answer = answer
            }
        });
        localStorage.setItem(
            "localQuestionList",
            JSON.stringify(this.questionList)
        );
    }

}

const testStore = new TestStore();
export default testStore;