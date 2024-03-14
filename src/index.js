import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true; //cors를 해결하며 false로 설정 함 

//다른 도메인에 요청을 보낼때 ㅇ청에 인증 정보를 담아서 보낼지를 결정
//쿠키나 인증 헤더 정보를 포함시켜 요청하고 싶다면 위의 옵션을 true로 설정
//https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-CORS-%EC%BF%A0%ED%82%A4-%EC%A0%84%EC%86%A1withCredentials-%EC%98%B5%EC%85%98
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);