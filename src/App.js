import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeStart } from "./store/reducers/sendRequestSlice";

function App() {
  const dispatch = useDispatch();
  const { start } = useSelector((state) => state.sendRequestSlice);
  return <div></div>;
}

export default App;
