import './App.css';
import './Css/style.css';
import Dashboard from './components/Dashboard'
import Chat from './components/Chat'
import Contact from './components/Contact'
import Deals from './components/Adduser'
import Email from './components/Email'
import Task from './components/Task'
import Setting from '../src/components/Setting';
import Sidebar from '../src/Assets/Sidebar'
import Header from '../src/Assets/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addtask from './Assets/Addtask';





function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Header />
      <div className='xyz'>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/email' element={<Email />} />
          <Route exact path='/task' element={<Task />} />
          <Route exact path='/deals' element={<Deals />} />
          <Route exact path='/setting' element={<Setting />} />
          <Route exact path='/task/addtask' element={<Addtask />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
