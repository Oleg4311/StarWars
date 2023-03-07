import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router-dom";
import Units from './pages/units/Units';
import Home from './pages/home/Home';
import Error from './pages/error/Error';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/units" element={<Units/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
