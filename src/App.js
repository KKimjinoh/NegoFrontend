import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddItem from './pages/AddItem/AddItem'
import ChatList from './pages/ChatList/ChatList'
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login'
import FormalLogin from './components/Login/FormalLogin';
import KakaoLogin from './components/Login/KakaoLogin'
import NotFound from './pages/NotFound/NotFound'
import FindLocation from './components/FindLocation/FindLocation';
import Mypage from './pages/MyPage/Mypage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*  대성이가 만든 코드<Route path='/' exact={true} element={<Home/>} Route/> 
            exact는 react router에서 사용되는 속성으로 라우트 매칭을 엄격하게 수행하도록 
            지시하는 불리언 값
            사이트 루트 경로인 /에 접근 핬을때만 해당 컴포넌트를 렌더링
        */}
        <Route path='/' element={<Home/>} Route/>

        <Route path='/additem' element={<AddItem/>} Route/>
        <Route path='/chatlist' element={<ChatList/>} Route/>
        <Route path='/signup' element={<SignUp/>} Route/>
        <Route path='/login' element={<Login/>} />
        <Route path='/mypage' element={<Mypage/>} />
        <Route path='/formallogin' element={<FormalLogin/>} />
        <Route path='/kakaologin' element={<KakaoLogin/>} />
        <Route path='/findlocation' element={<FindLocation/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
