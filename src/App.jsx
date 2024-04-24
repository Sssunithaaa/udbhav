import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './Pages/HomePage';
import './index.css'
import EventDescription from "./Pages/EventDescription";
import Events from "./Pages/Events";
function App() {

  return (
    <>
      <div className="w-screen max-w-screen  overflow-x-hidden">
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/:event' element={<EventDescription/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
         </Routes>
         </BrowserRouter>
       </div>
    </>
  )
}

export default App
