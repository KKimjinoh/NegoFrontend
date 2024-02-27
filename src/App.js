import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddItem from './pages/AddItem/AddItem'
import ChatList from './pages/ChatList/ChatList'
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login'
import FormalLogin from './components/Login/FormalLogin';
import KakaoLogin from './components/Login/KakaoLogin'
import NotFound from './pages/NotFound/NotFound'
import FindLocation from './components/FindAddress/FindLocation';
import Mypage from './pages/MyPage/Mypage';
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
        <Route path='/Mypage' element={<Mypage/>} />

        <Route path='/formallogin' element={<FormalLogin/>} />
        <Route path='/kakaologin' element={<KakaoLogin/>} />
        <Route path='/findlocation' element={<FindLocation/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
