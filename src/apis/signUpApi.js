import axios from "axios"
export const signUpApi=async (name,email,password,tel,nickname,address)=>{
    await axios.post("http://kim-sun-woo/api/join",
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
    ).then(()=>{console.log("s")})
    .catch((error)=>{console.log(error)})
}