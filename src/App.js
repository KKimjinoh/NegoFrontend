import {Route, Routes } from 'react-router-dom';
import AddItem from '../src/pages/AddItem';
import ChatList from '../src/pages/ChatList';
import Home from '../src/pages/Home';
import SignUp from '../src/pages/SignUp';
import Login from '../src/pages/Login'
import NotFound from './pages/NotFount';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact={true} element={Home} Route/>
        <Route path='/additem' element={AddItem} Route/>
        <Route path='/chatlist' element={ChatList} Route/>
        <Route path='/signup' element={SignUp} Route/>
        <Route path='/login' element={Login} />
        <Route path='*' element={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
