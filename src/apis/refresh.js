//refresh토큰을 받아오는 코드
import axios from "axios";
export const getNewRefreshToken= async ()=>{
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refresh');
    const result = await axios.post('url',
        {
            refreshToken,//body에 refresh토큰 넣음
        },
        {
            headers:{
                Authorization:accessToken
            },
        }
    );
    return result.data;
};
