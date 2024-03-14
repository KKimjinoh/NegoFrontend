import React from 'react'; 
import { Link } from 'react-router-dom';
import './Login.scss'
const Login = () => {
    const REST_API_KEY='8b3ab627df1ffaf5954d4ba28d64f7b1';
    const REDIRECT_URI='http://localhost:3000/kakaologin/auth';
    const kakaoURL=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const clickKakao=()=>{
        window.location.href=kakaoURL;
        // const code = new URL(window.loca)
    }

    //http://localhost:3000/kakaologin/auth?code=GzZDXVfblH21QtIKGVQGES_ufeSufWvDOFtBbAByKiyYWh6M2wXalOlXwz8KPXRoAAABjjbY4eeYFzyUYZmfhQ
    //code밑에 주는 문자열이 카카오에서 준 인가 코드, 백엔드에게 전달

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
                    {/* <Link className='hasLink' to={'/KakaoLogin'}>
                        카카오톡으로 로그인
                    </Link> */}
                    <div onClick={clickKakao}>카카오 로그인</div>
                </div>
                <div className='TwoLogin'>
                    <Link className='hasLink' id='formalLogin' to={'/FormalLogin'}>
                        <p>일반 로그인</p>
                    </Link>
                </div>
            </div>
            <div className='loginToSignUp'>
                <Link className='hasLink' to={'/signup'}>
                처음이신 분들은 회원가입
                </Link>
            </div>
        </div>
    );
}; 
export default Login;
