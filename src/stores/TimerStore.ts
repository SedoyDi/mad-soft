import { makeAutoObservable } from "mobx";

class TimerStore {
  initialValue: number = 10; //начальное значение таймера в секундах
  timerValue: string = "";
  warning: boolean = false;
  finished: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  timer = () => {
    if (this.initialValue === 0 || this.initialValue < 0) {
      this.finished = true;
      return;
    }

    if (this.initialValue < 15) {
      this.warning = true;
    }

    this.initialValue--;
    const minutes = Math.floor(this.initialValue / 60);
    const seconds = this.initialValue % 60;
    this.timerValue = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
}

const timerStore = new TimerStore();
export default timerStore;
