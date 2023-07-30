import "./App.css";
import {Routes,Route} from "react-router-dom"
import  Nav  from "./component/Nav/Navigate";
import Home from "./component/Home/Home";
import AddEmp from './component/AddEmp/Add'
import List from './component/List/List'
function App() {
  return (
    <div className="App">
   <Nav/>
   <div>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/add" element={<AddEmp/>}/>
   <Route path="/edit/:id" element={<AddEmp/>}/>
   <Route path="/list" element={<List/>}/>

   </Routes>
   </div>
    </div>
  );
}
export default App;
