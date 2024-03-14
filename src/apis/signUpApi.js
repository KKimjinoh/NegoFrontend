import axios from "axios"
export const signUpApi=async (name,email,password,tel,nickname,address)=>{
    await axios.post("http://localhost:8080/members/sign_up",
    {
        name,
        email,
        password,
        tel,
        nickname,
        address
    }
    // {
    //     headers:{'Access-control-Allow':'*'} gpt피셜 백엔드에서 작성
    // }
    ).then(()=>{console.log("회원가입을 성공하였습니다. 수고하셨어요")})
    .catch((error)=>{console.log(error+"회원가입 정보를 보내지 못했습니다.")});
}