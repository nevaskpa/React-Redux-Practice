import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      Count {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(4))}>-</button>
      {isLogged ? <h3>Private information</h3> : ""}
    </div>
  );
}

export default App;
