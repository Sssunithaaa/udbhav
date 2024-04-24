import { Routes, Route, BrowserRouter,HashRouter } from "react-router-dom";
import HomePage from './Pages/HomePage';
import './index.css'
import EventDescription from "./Pages/EventDescription";
import Events from "./Pages/Events";
function App() {

  return (
    <>
      <div className="w-screen max-w-screen  overflow-x-hidden">
         <HashRouter>
         <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/:event' element={<EventDescription/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
         </Routes>
         </HashRouter>
       </div>
    </>
  )
}

export default App
