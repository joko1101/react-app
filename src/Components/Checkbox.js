import "../App.css";
import { useReducer } from "react";

function Checkbox() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default Checkbox;
