import React from 'react'
import { useEffect,useState } from 'react';
import { getMyPage } from '../../apis/mypage';
import Header from '../../components/Header/Header';
import './MyPage.scss'
const Mypage = () => {
    const [data,setData]=useState();
    // const [loading, setLoging]=useState(true);//로딩 정보
    
    useEffect(()=>{
        getMyPage().then((res)=>{//내 정보 불러오기
            setData(res);
            console.log(data)
            // setLoging(false);
        },[]);
    })
    // if (loading) return <div>로딩중..</div>
    return (
        <div className='Mypage'>
            <Header/>
            <div className='MypageHead'>
                <div id='Myprofile'></div>
                <div id='MyPageName'>닉네임</div>
                {/* <div>{data?.name}</div> */}
                <div id='MyPageSet'>프로필 설정</div>
            </div>
            <div className='MyPageMoney'>
                <div>올해번 금액</div>
                <div id=''>20000</div>
            </div>
            <div className='MyPageMenu'>
               <div className='MyPageMenuBundle'>
                    <div className='MypageMenuBtn'></div>
                    <div>내 상품 관리</div>
               </div>
               <div className='MyPageMenuBundle'>
                    <div className='MypageMenuBtn'></div>
                    <div>판매내역</div>
               </div>
               <div className='MyPageMenuBundle'>
                    <div className='MypageMenuBtn'></div>
                    <div>찜</div>
               </div>
               <div className='MyPageMenuBundle'>
                    <div className='MypageMenuBtn'></div>
                    <div>구매내역</div>
               </div>
               <div className='MyPageMenuBundle'>
                    <div className='MypageMenuBtn'></div>
                    <div>최근본상품</div>
               </div>
            </div>
            <div>
                <div>내 상점 후기</div>
                <div>로그아웃</div>
            </div>
        </div>
    )
}

export default Mypage