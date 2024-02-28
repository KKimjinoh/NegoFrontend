import React from 'react'; 
import { Link } from 'react-router-dom';
import './Login.scss'
const Login = () => {
    return (
        <div className='login'>
            <div className='loginExplain'>
                <div className='loginExplainWord'>
                    아끼다 똥 된다!
                    <div></div>
                    모두 네고랜드로!
                </div>
                <div className='loginExplainImg'></div>
            </div>
            <div className='loginTwoway'>
                <div className='TwoLogin'>
                    <Link className='hasLink' to={'/KakaoLogin'}>
                        카카오톡으로 로그인
                    </Link>
                </div>
                <div className='TwoLogin'>
                    <Link className='hasLink' id='formalLogin' to={'/FormalLogin'}>
                        <p>일반 로그인</p>
                    </Link>
                </div>
            </div>
            <div className='loginToSignUp'>
                <Link className='hasLink' to={'/Signup'}>
                처음이신 분들은 회원가입
                </Link>
            </div>
        </div>
    );
}; 
export default Login;
