import './App.css';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Test from './Test/Test';
import timerStore from '../stores/TimerStore';
import NumberOfTopics from './NumberOfTopics/NumberOfTopics';


const App: React.FC = observer(() => {

  const { timerValue, warning, finished, timer } = timerStore;

  useEffect(() => {
    timer();
  }, [timerValue])

  return (
    <div className='app'>
      <header className="app__header">
        <h1 className='app__title'>Тестирование</h1>
        <span className={warning ? 'app__timer warning' : 'app__timer'}>{timerValue}</span>
      </header>
      <main className="app__content">
        <NumberOfTopics />
        <Test finished={finished} />
      </main>
    </div>
  );
});

export default App;
