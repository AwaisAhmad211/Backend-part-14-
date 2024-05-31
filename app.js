const cookieParser = require('cookie-parser');
const express = require('express') ;
const app = express() ;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

app.use(cookieParser());
app.get("/",(req,res)=>{
    res.cookie("name" , "Awais")
    res.send("Done")
})
app.get("/read",(req,res)=>{
    let cookie = req.cookies;
    console.log(cookie);
    res.send("Check console")
})
// app.get("/bcrypt",(req,res)=>{
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash("Awais",salt,(err,hash)=>{
//             console.log(hash);
//         })
//     })
//     res.send("Done")

//     bcrypt.compare("Awais","$2b$10$onRW.U.sue4ia3CEcny/q.axZeZeH3xwxBq6uzD7aTD.G6EaxDBAW",(err,result)=>{
//         console.log(result);
//     })
//     res.send("Done")
// })

app.get("/jwt",(req,res)=>{
  let token = jwt.sign({email : "awais@gmail.com"},"secret") ;
  res.cookie("token", token);
  console.log(req.cookies.token)
  res.send("Working")
})
app.get("/jwtRead",(req,res)=>{
  let data = jwt.verify(req.cookies.token , "secret")
  console.log(data);
})
app.listen(3000) ;