import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DepositAction,
  WithdrawlAction,
  WithdrawlAllAction,
  addTodoAction,
  inputValueAction,
} from "./Redux/actions";

function App() {
  const amount = useSelector((state) => state.amount);
  const todos = useSelector((state) => state.todo);
  const value = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  const handleOnDeposit = () => {
    dispatch(DepositAction(500));
  };

  const handleOnWithdrawl = () => {
    dispatch(WithdrawlAction(500));
  };

  const handleOntodoClick = () => {
    dispatch(addTodoAction("todo"));
  };

  return (
    <div className="App">
      <h1>Amount {amount}</h1>
      <button onClick={handleOnDeposit}>deposit</button>
      {"  "}
      <button onClick={handleOnWithdrawl}>withdrawl</button>{" "}
      <button
        onClick={() => {
          dispatch(WithdrawlAllAction());
        }}
      >
        withdrawl all
      </button>
      <hr />
      {/* <input type="text" /> */}
      <button onClick={handleOntodoClick}>add todo</button>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <hr />
      <input
        type="text"
        onChange={(e) => dispatch(inputValueAction(e.target.value))}
      />
      <p>{value}</p>
    </div>
  );
}

export default App;
