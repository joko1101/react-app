import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import State from "./Components/useState_useEffect";
import Checkbox from "./Components/Checkbox";
import Ref from "./Components/useRef";
import Home from "./Components/Home";
import State2 from "./Components/getValues";
import Input from "./Components/CustomHook";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Checkbox' element={<Checkbox />} />
          <Route path='/state' element={<State />} />
          <Route path='/Ref' element={<Ref />} />
          <Route path='/state2' element={<State2 />} />
          <Route path='/input' element={<Input />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
