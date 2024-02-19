import axios from "axios"
export const signUpApi=async (name,email,password,tel,cickname,address)=>{
    const result=await axios.post("여기에 url설정",{
        name,
        email,
        password,
        tel,
        cickname,
        address
    }).then(()=>{console.log("s")})
    .catch(()=>{console.log("F")})
    return result.data;
}