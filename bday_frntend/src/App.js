import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Add from './Components/Add';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
