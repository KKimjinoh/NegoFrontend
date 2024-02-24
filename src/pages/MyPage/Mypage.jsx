import React, { useEffect, useState } from 'react'
import { getMyPage } from '../../apis/mypage';
const Mypage = () => {
    const [data,setData]=useState();
    const [loading, setLoging]=useState(true);//로딩 정보
    
    useEffect(()=>{
        getMyPage().then((res)=>{//내 정보 불러오기
            setData(res);
            setLoging(false);
        },[]);
    })
    if (loading) return <div>로딩중..</div>
    return (
        <div>Mypage
            <div>{data?.name}</div>
            <div>{data?.age}</div>
            {/* ?: undifined면 아무것도 출력하지 않는다. */}
            
        </div>
    )
}

export default Mypage