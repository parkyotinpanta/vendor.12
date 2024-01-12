const express =require ('express')
const mysql = require('mysql')

const app = express()
// mysql
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'vendor',
    port:'3306'
})
connection.connect((err)=>{
    if(err){
        console.log('error')
        return
    }
    console.log('mysql successfully')
})




app.listen(3000,()=>console.log('go'))