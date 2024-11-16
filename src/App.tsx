import { Routes, Route } from "react-router-dom";// interface vehicles{
import Home from "./pages/home";
//   make:String;
//   model:String;
//   year:Number
// }
function App() {

return(
  <Routes>
    <Route path="/" element ={<Home/>}/>

  </Routes>
  )
}

export default App
