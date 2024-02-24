import { getAuthAxios } from './authAxios';
//내 정보를 불러오는 api코드
export const getMyPage=async()=>{
    const access = localStorage.getItem('access');
    const authAxios=getAuthAxios(access);//authAxios: axios객체 생성
    const result=await authAxios.get('.mypage');
    return result.data
}; 