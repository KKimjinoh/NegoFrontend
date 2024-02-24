import axios from "axios"
//login요청후 성공하면 토큰을 받아오는 api코드
export const formalLoginApi=async (email,password)=>{
    const result=axios.post("여기에 일반로그인url설정", {email, password} );
    console.log("formalLoginApi에서 만듬 ",result.data.data);
    return result.data.data; //로그인 성공시 accesstoken과 refreshtoken을 받아와서 
    //result.data로 받아온다,data안에 data가 있음
}