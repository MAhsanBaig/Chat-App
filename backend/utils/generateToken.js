import jwt from "jsonwebtoken"
const gnerateTokenAndSetCookie=(userId,res)=>{
    const token =jwt.sign({userId},process.env.Jwt_SECRET,{expiresIn: '15d'})
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV !== "development"
    })
};
export default gnerateTokenAndSetCookie
