import React, { useState } from 'react'; 
import Header from '../Header/Header';
import './FormalLogin.scss';
import {formalLoginApi} from '../..//apis/formalLoginApi.js';
import { useNavigate } from 'react-router-dom';

const FormalLogin=()=>{
    const router=useNavigate();
    const [loginform,setLoginForm]=useState({
        email:'',
        password:'',
    });

    const onClick=async()=>{
        try{
            const result= await formalLoginApi(loginform.email,loginform.password);
            // const {accessToken,refreshToken}=result;// 구조 분할 할당으로 result에있는 두 토큰을 받아온다.
            const accessToken=result[0];
            const refreshToken=result[1];
            localStorage.setItem('access',accessToken);
            localStorage.setItem('refresh',refreshToken);
            console.log("로그인 완료, 로컬스토리지에서 토큰을 확인해주세요")
            router('/');
        }
        catch(error){
            console.log("login실패",error);
        }
    }

    return(
        <div className='formalLogin'>
            <Header headleft="네고랜드 로그인"/>
            <div className='form_FormalLogin'>
                <label htmlFor="email">이메일</label>
                <input 
                    id='email'
                    name='email'
                    value={loginform.email}
                    onChange={e=>setLoginForm({...loginform,email:e.target.value})} 
                />
            </div>
            <div className='form_FormalLogin'>
                <label htmlFor="password">비밀번호</label>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    value={loginform.password}
                    onChange={e=>setLoginForm({...loginform,password:e.target.value})} 
                />
            </div>
            <div className='formalLoginBtn' onClick={onClick}>
                로그인하기
            </div>        
        </div>
    );
}
export default FormalLogin;