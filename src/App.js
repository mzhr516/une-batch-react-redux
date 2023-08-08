import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { Posts } from "./components/posts";

function App() {
  const todos = useSelector((state) => state.todo);
  const value = useSelector((state) => state.inputValue);

  const dispatch = useDispatch();

  // const handleOntodoClick = () => {
  //   dispatch(addTodoAction("todo"));
  // };

  return (
    <div className="App">
      {/* <Exp1/>
      <hr />
      <button onClick={handleOntodoClick}>add todo</button>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <hr />
      <input
        type="text"
        onChange={(e) => dispatch(inputValueAction(e.target.value))}
      />
      <p>{value}</p> */}

      <Posts />
    </div>
  );
}

export default App;
