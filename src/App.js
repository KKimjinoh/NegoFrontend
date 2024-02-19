import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddItem from './pages/AddItem/AddItem'
import ChatList from './pages/ChatList/ChatList'
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact={true} element={<Home/>} Route/>
        <Route path='/additem' element={<AddItem/>} Route/>
        <Route path='/chatlist' element={<ChatList/>} Route/>
        <Route path='/signup' element={<SignUp/>} Route/>
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
