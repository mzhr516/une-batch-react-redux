import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdrawl } from "./redux/Actions";

function App() {
  const amount = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnDeposit = () => {
    dispatch(deposit());
  };

  const handleOnWithdrawl = () => {
    dispatch(withdrawl());
  };

  return (
    <div className="App">
      <h1>Amount {amount}</h1>
      <button onClick={handleOnDeposit}>deposit</button>
      {"  "}
      <button onClick={handleOnWithdrawl}>withdrawl</button>
    </div>
  );
}

export default App;
