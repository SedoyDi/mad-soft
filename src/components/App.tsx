// исправленный код
import './App.css';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import testStore from '../stores/TestStore';
import timerStore from '../stores/TimerStore';
import NumberOfTopics from './NumberOfTopics/NumberOfTopics';

import {
  startTimerValue,
  startQuestionList,
  parseInitialValue,
  parseQuestionList,
  parseCompleted
} from '../utils/constants';
import TestFormComponent from './TestFormComponent/TestFormComponent';

const App: React.FC = observer(() => {
  const {
    timerValue,
    warning,
    finished,
    setFinished,
    setInitialValue,
    timer
  } = timerStore;

  const {
    completed,
    questionList,
    setQuestionList,
    setCompleted,
    goToNextQuestion,
    addAnswer
  } = testStore;

  // отслеживаем изменения в таймере
  useEffect(() => {
    setInitialValue(startTimerValue); //устанавливаем значение таймера
    if (parseInitialValue > 0) {
      setInitialValue(parseInitialValue);
    } else {
      if (parseInitialValue === 0 || parseInitialValue === null) {
        setInitialValue(0);
        setFinished(true);
      }
    }
    const interval = setInterval(() => {
      timer();
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  // отслеживаем ход тестирования
  useEffect(() => {
    if (parseCompleted) {
      setCompleted(parseCompleted);
    }

    setQuestionList(startQuestionList); // устанавливаем список вопросов

    if (parseQuestionList) {
      setQuestionList(parseQuestionList);
    }
  }, [])

  return (
    <div className='app'>
      <header className="app__header">
        <h1 className='app__title'>Тестирование</h1>
        <span className={warning ? 'app__timer warning' : 'app__timer'}>{timerValue}</span>
      </header>
      <main className="app__content">
        <NumberOfTopics questionList={questionList} />
        {completed
          ? <h2>Тестирование закончено, поздравляем!</h2>
          : questionList.map((question) => {
            if (question.active) {
              return (
                <TestFormComponent
                  key={question.id}
                  finished={finished}
                  question={question}
                  goToNextQuestion={goToNextQuestion}
                  addAnswer={addAnswer} />
              );
            }
            return null;
          })}
      </main>
    </div>
  );
});

export default App;