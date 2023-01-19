import { makeAutoObservable, makeObservable } from "mobx";

class Calc {
  ops = ["/", "*", "+", "-", "."];
  calcValue = "";
  result = "";
  totalValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  setCalcValue(value) {
    this.calcValue = value;
  }

  upDateCalc(value) {
    if (this.calcValue.length >= 9) return (this.calcValue = "err");
    if (this.calcValue === "err") return;
    if (
      (this.ops.includes(value) && this.calcValue === "") ||
      (this.ops.includes(value) && this.ops.includes(this.calcValue.slice(-1)))
    ) {
      return;
    }

    this.calcValue = this.calcValue + value;

    if (!this.ops.includes(value)) {
      this.result = eval(this.calcValue + value).toString();
    }
  }

  calculate() {
    const newVal = eval(this.calcValue).toFixed(6).toString();

    this.setCalcValue(newVal);
  }

  deleteLast() {
    if (this.calcValue === "") return;

    const value = this.calcValue.slice(0, -1);
    this.setCalcValue(value);
  }
}

export default new Calc();
