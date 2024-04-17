import { makeAutoObservable } from "mobx";

class TimerStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialValue: number = 0; //начальное значение таймера в секундах
  timerValue: string = "";
  warning: boolean = false;
  finished: boolean = false;

  setInitialValue = (value: number) => {
    this.initialValue = value;
  };
  setFinished = (value: boolean) => {
    this.finished = value;
  };
  timer = () => {
    if (this.initialValue === 0 || this.initialValue < 0) {
      this.setFinished(true);
      return;
    }

    if (this.initialValue < 15) {
      this.warning = true;
    }

    this.initialValue--;

    const minutes = Math.floor(this.initialValue / 60);
    const seconds = this.initialValue % 60;
    this.timerValue = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    localStorage.setItem(
      "localInitialValue",
      JSON.stringify(this.initialValue)
    );
  };
}

const timerStore = new TimerStore();
export default timerStore;
