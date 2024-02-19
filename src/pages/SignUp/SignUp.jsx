import React, { useState } from 'react'; 
import { signUpApi } from '../../apis/signUpApi';
import './SignUp.scss'
const SignUp = () => {
    //회원가입 제출 data관리, useState
    //이름 이메일 비밀번호 전화번호 별명 주소
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pw,setPw]=useState("");
    const [rePw,setRePw]=useState("");
    const [tel,setTel]=useState("");
    const [nickname,setNickname]=useState("");
    const [address,setAddress]=useState("");

    const onClick= ()=>{
        signUpApi(name,email,pw,tel,nickname,address);
    }

    const changeName=(e)=>{
        setName(e.target.value);
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const changePw=(e)=>{
        setPw(e.target.value);
    }
    const changeRePassword=(e)=>{
        setRePw(e.target.value);
    }
    const changeTel=(e)=>{
        setTel(e.target.value);
    }
    const changeNickname=(e)=>{
        setNickname(e.target.value);
    }
    const changeAdress=(e)=>{
        setAddress(e.target.value)
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
            <br />
            {/* 이름 이메일 비밀번호  비밀번호확인 전화번호 닉네임 동네찾기/ */}
            <div className='form_SignUp'>
                <label htmlFor="name">이름</label>
                <br />
                <input id='name' name='name' value={name} onChange={changeName} />
                <span>{nameErr}</span>
            </div>
            <div className='form_SignUp'>
                <label htmlFor="email">이메일</label>
                <br />
                <input type='email' id='email' name='email' value={email} onChange={changeEmail} />
                <span>{emailErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="password">비밀번호</label>
                <br />
                <input type='password' id='password' name='password'value={pw} onChange={changePw}/>
                <span>{pwErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="rePassword">비밀번호확인</label>
                <br />
                <input type='password' id='rePassword' name='rePassword' value={rePw} onChange={changeRePassword} />
                <span>{rePwErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="tel">전화번호 ( -제외 ) </label>
                <br />
                <input id='tel' name='tel' value={tel} onChange={changeTel} />
                <span>{telErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="nickname">닉네임</label>
                <br />
                <input id='nickname' name='nickname' value={nickname} onChange={changeNickname} />
                <span>{nicknameErr}</span>

            </div>
            <div className='form_SignUp'>
                <label htmlFor="address">동네찾기</label>
                <br />
                <input id='address' name='address' value={address} onChange={changeAdress} />
                <span>{addressErr}</span>
            </div>
            <div className='askSignUp' onClick={onClick}>
                회원가입하기
            </div>
        </div>
    );
}; 
export default SignUp;
