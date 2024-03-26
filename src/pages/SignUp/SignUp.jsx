import React, { useEffect, useState } from 'react'; 
import Header from '../../components/Header/Header';
import { signUpApi } from '../../apis/signUpApi';
import { geolocation } from '../../components/FindLocation/GeoLocation';
import FindLocation from '../../components/FindLocation/FindLocation.jsx'
import './SignUp.scss'


const SignUp = () => {
    const [form,setForm]=useState({
        name:'',
        email:'',
        pw:'',
        rePw:'',
        tel:'',
        nickname:'',//나중에 post하고 결과로 알려주기,아직 구현 못함
        address:''//주소:findAddress로 넘어가서 입력받은 데이터를 input으로 줌
    });
    //email 조건 정규식
    //pwd 조건: 소문자, 대문자, 숫자, 특수문자(!@#$%)가 꼭 들어있고 8~24글자라는 뜻
    //"-"을 기준으로, 앞자리 2~3자리, 가운데 3~4자리, 마지막 3~4자리의 숫자로만 이루어진 문자열 체크, -빼면 -빼고 조건 그대로 유지
    const [validEmail,setValidEmail]=useState(false);
    const [validPW,setValidPW]=useState(false);
    const [validRePw,setValidRePw]=useState(false);
    const [validTel,setValidTel]=useState(false);
    //현재위치 localstorage저장
    useEffect(()=>{
        geolocation()
        .then(([lat,lng])=>{
            localStorage.setItem("lat",lat);
            localStorage.setItem("lng",lng);
            }
        )
        .catch(error=>{
            localStorage.setItem("lat",37.88602477209835 );//혹시 geolocation이 안될경우 기본값으로 세팅
            localStorage.setItem("lng",127.73794321732926);
            console.log(error);
        })
        if(localStorage.getItem("address")){
            form.address=localStorage.getItem("address");
        }
    },[])
    //유효성검사
    useEffect(()=>{
        const EMAIL_REGEX=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const result= EMAIL_REGEX.test(form.email);
        setValidEmail(result);
    }, [form.email]);

    useEffect(()=>{
        const PW_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
        const result=PW_REGEX.test(form.pw);
        setValidPW(result);
        const match= form.pw === form.rePw; 
        setValidRePw(match);
    }, [form.pw, form.rePw]);

    useEffect(()=>{
        const TEL_REGEX=/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
        const result=TEL_REGEX.test(form.tel);
        setValidTel(result);
    },[form.tel]);

    const onClick= ()=>{
        signUpApi(form.name,form.email,form.pw,form.tel,form.nickname,form.address);
    }

    const emailErr="이메일 형식에 맞게 작성";
    const pwErr="소문자,대문자,숫자,!@#$%, 총 8~24글자입력"
    const rePwErr="패스워드와 일치하는지 확인해주세요";
    const telErr="전화번호 형식에 맞지 않거나, - 이 없습니다."
    return (
        <div className='signUp'>
            <Header headleft={"회원가입"}/>
            <div className='form_SignUp'>
                <label htmlFor="name">이름</label>
                <input 
                    id='name' 
                    name='name' 
                    value={form.name} 
                    onChange={
                        e=>setForm({...form,name:e.target.value})} 
                />
            </div>
            <div className='form_SignUp'>
                <label htmlFor="email">이메일</label>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    value={form.email} 
                    onChange={e=>setForm({...form,email:e.target.value})} 
                    placeholder='이메일 형식에 맞게 입력해주세요'
                    />
                {(!validEmail && form.email.length>0)&&<span className='errorMsg'>{emailErr}</span>
}
            </div>
            <div className='form_SignUp'>
                <label htmlFor="password">비밀번호</label>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    value={form.pw} 
                    placeholder='소문자, 대문자, 숫자, !@#$%중 하나, 총 8~24글자 입력'
                    onChange={e=>setForm({...form,pw:e.target.value})} 
                    />
                {(!validPW && form.pw.length>0) && <span className='errorMsg'>{pwErr}</span>}

            </div>
            <div className='form_SignUp'>
                <label htmlFor="rePassword">비밀번호확인</label>
                <input 
                    type='password' 
                    id='rePassword' 
                    name='rePassword' 
                    value={form.rePw} 
                    placeholder='위에서 입력한 비밀번호와 동일하게 입력'
                    onChange={e=>setForm({...form,rePw:e.target.value})} 
                />
                {(!validRePw && form.rePw.length>0) && <span className='errorMsg'>{rePwErr}</span>}
            </div>
            <div className='form_SignUp'>
                <label htmlFor="tel">전화번호 ( - 필수 ) </label>
                <input 
                    id='tel'
                    name='tel'
                    value={form.tel}
                    onChange={e=>setForm({...form,tel:e.target.value})} 
                />
                {(!validTel && form.tel.length>0) &&<span className='errorMsg'>{telErr}</span>}
            </div>
            <div className='form_SignUp'>
                <label htmlFor="nickname">닉네임</label>
                <input 
                    id='nickname' 
                    name='nickname' 
                    value={form.nickname} 
                    onChange={e=>setForm({...form,nickname:e.target.value})} 
                    />
            </div>
            <div className='form_SignUp'>
                <label htmlFor="address">동네찾기</label>
                    {form.address !=="" &&<input id='address' 
                    name='address' 
                    value={form.address}
                    onChange={e=>setForm({...form,address:e.target.value})} 
                    />}
            </div>
            <FindLocation/>
            {(validEmail&&validPW&&validRePw&&validTel) &&<div className='askSignUp' onClick={onClick}>
                회원가입하기
            </div>}
        </div>
    );
}; 
export default SignUp;
