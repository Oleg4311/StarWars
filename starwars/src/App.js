import "bootstrap/dist/css/bootstrap.min.css";

import {Route, Routes} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Menu from "./components/Menu/Menu";
import Units from './pages/units/Units';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import { useEffect } from "react";
import { initUnitsAC } from "./store/units/actionsCreators";

function App() {
  const dispatch = useDispatch;
  const units = useSelector((store) => store.units);
  console.log("🚀 ~ file: App.js:13 ~ App ~ units:", units)
//   useEffect(() => {
//     dispatch(initUnitsAC());
// }, []);
  return (
    // (units.length ?
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/units" element={<Units/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
    // :
    // <div className="App">
    //   <Routes>
    //     <Route path="/error" element={<Error/>}/>
    //   </Routes>
    // </div>)
  );
}

export default App;
