interface QuestionList {
    id: number;
    active: boolean;
    question: string;
    answer: string;
    answerType: string;
    variant: {
        name: string;
        label: string;
    }[];
}


export const startTimerValue: number = 80;

const localInitialValue: string = localStorage.getItem("localInitialValue") || "";
export const parseInitialValue: number = localInitialValue && (JSON.parse(localInitialValue));
const localQuestionList: string = localStorage.getItem("localQuestionList") || "";
export const parseQuestionList: QuestionList[] = localQuestionList && (JSON.parse(localQuestionList));
const localCompleted: string = localStorage.getItem("localCompleted") || "";
export const parseCompleted: boolean = localCompleted && (JSON.parse(localCompleted));

export const startQuestionList: QuestionList[] =
    [
        {
            id: 1,
            active: true,
            question: "Какое число больше?",
            answer: '',
            answerType: "radio",
            variant: [
                {
                    name: 'answer-1',
                    label: "10",
                }, {
                    name: 'answer-2',
                    label: "20"
                }
            ],
        },
        {
            id: 2,
            active: false,
            question: "кто из нижеперечисленных относится к животным?",
            answer: '',
            answerType: "checkbox",
            variant: [
                {
                    name: 'answer-1',
                    label: "лошадь",
                }, {
                    name: 'answer-2',
                    label: "собака"
                }, {
                    name: 'answer-3',
                    label: "жук"
                }
            ],
        },
        {
            id: 3,
            active: false,
            question: "дайте короткий ответ: как звали коня Александра Макидонского?",
            answer: '',
            answerType: "text",
            variant: [
                {
                    name: 'answer',
                    label: '',
                }
            ],
        },
        {
            id: 4,
            active: false,
            question: "чем вы любите заниматься в свободное время?",
            answer: '',
            answerType: "textarea",
            variant: [
                {
                    name: 'answer',
                    label: '',
                }
            ],
        },
    ];