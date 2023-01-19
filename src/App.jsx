import "./App.css";
import calc from "./store/calc";
import CalcBtns from "./components/CalcBtn";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  // const [isClickt, setIsClickt] = useState(false);
  // const [result, setResult] = useState("");

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <CalcBtns key={i} onClick={() => calc.upDateCalc(i.toString())}>
          {i}
        </CalcBtns>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <section className="screen">{calc.calcValue || "0"}</section>
      <button
        className="calc-btn"
        onClick={() => {
          calc.setCalcValue("");
        }}
      >
        C
      </button>
      <button
        className="calc-btn"
        onClick={() => {
          calc.upDateCalc(".");
        }}
      >
        .
      </button>
      <button
        className="calc-btn"
        onClick={() => {
          calc.deleteLast();
        }}
      >
        ←
      </button>
      <button
        className="calc-btn"
        onClick={() => {
          calc.upDateCalc("+");
        }}
      >
        +
      </button>
      {createDigits()}
      <button
        className="calc-btn btnMult"
        onClick={() => {
          calc.upDateCalc("*");
        }}
      >
        *
      </button>
      <button
        className="calc-btn"
        onClick={() => {
          calc.upDateCalc("/");
        }}
      >
        /
      </button>
      <button
        className="calc-btn btnMin"
        onClick={() => {
          calc.upDateCalc("-");
        }}
      >
        -
      </button>
      <button
        className="calc-btn btnZero"
        onClick={() => {
          calc.upDateCalc("0");
        }}
      >
        0
      </button>
      <button
        className="calc-btn"
        onClick={() => {
          calc.calculate();
        }}
      >
        =
      </button>
    </div>
  );
});

export default App;
