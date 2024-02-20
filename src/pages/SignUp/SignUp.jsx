import React, { useState } from 'react'; 
// import { signUpApi } from '../../apis/signUpApi';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

import './SignUp.scss'
const SignUp = () => {
    //회원가입 제출 data관리, useState
    //이름 이메일 비밀번호 전화번호 별명 주소
    const [form,setForm]=useState({
        name:'',
        email:'',
        pw:'',
        rePw:'',
        tel:'',
        nickname:'',
        address:''
    })

    const onClick= ()=>{
        // signUpApi(form.name,form.email,form.pw,form.tel,form.nickname,form.address);
        console.log(form.name,form.email,form.pw,form.tel,form.nickname,form.address);
    }

    const [nameErr,setnameErr]=useState("임시로 띄운 에러메세지"); //한 글자 이상
    const [emailErr,setEmailErr]=useState("");//이메일 형식
    const [pwErr,setPwErr]=useState("");//pw유효성
    const [rePwErr,setRePwErr]=useState("");//pw와 확인
    const [telErr,setTelErr]=useState("");//올바른 전화번호
    const [nicknameErr,setNicknameErr]=useState("");//중복 검사
    const [addressErr,setAddressErr]=useState("");//주소 유효검사

    return (
        <div className='signUp'>
            <Header headleft={"회원가입"}/>
            {/* 이름 이메일 비밀번호  비밀번호확인 전화번호 닉네임 동네찾기/ */}
            <div className='form_SignUp'>
                <label htmlFor="name">이름</label>
                <input 
                    id='name' 
                    name='name' 
                    value={form.name} 
                    onChange={
                        e=>setForm({...form,name:e.target.value})} 
                />
                <span>{nameErr}</span>
            </div>
            <div className='form_SignUp'>
                <label htmlFor="email">이메일</label>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    value={form.email} 
                    onChange={e=>setForm({...form,email:e.target.value})} 
                    />
                <span>{emailErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="password">비밀번호</label>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    value={form.pw} 
                    onChange={e=>setForm({...form,pw:e.target.value})} 
                    />
                <span>{pwErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="rePassword">비밀번호확인</label>
                <input 
                    type='password' 
                    id='rePassword' 
                    name='rePassword' 
                    value={form.rePw} 
                    onChange={e=>setForm({...form,rePw:e.target.value})} 
                />
                <span>{rePwErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="tel">전화번호 ( -제외 ) </label>
                <input 
                    id='tel'
                    name='tel'
                    value={form.tel}
                    onChange={e=>setForm({...form,tel:e.target.value})} 
                />
                <span>{telErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="nickname">닉네임</label>
                <input 
                    id='nickname' 
                    name='nickname' 
                    value={form.nickname} 
                    onChange={e=>setForm({...form,nickname:e.target.value})} 
                    />
                <span>{nicknameErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="address">동네찾기</label>
                    {form.address ==="" &&
                    <div className='findAddress'>
                        <Link className='findAddress' to={'/findAddress'}>우리동네 등록하기</Link>
                    </div>}
                <input id='address' 
                    name='address' 
                    value={form.address}
                    onChange={e=>setForm({...form,address:e.target.value})} 
                    />
                
                <span>{addressErr}</span>
            </div>
            <div className='askSignUp' onClick={onClick}>
                회원가입하기
            </div>
        </div>
    );
}; 
export default SignUp;
