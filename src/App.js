import './App.css';
import Home from "./screens/Home";
import {Route, Routes} from "react-router-dom";
import ItemPage from "./screens/ItemPage";

function App() {
  return (
    <div className="App">
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<ItemPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
