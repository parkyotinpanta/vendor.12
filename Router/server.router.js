const express = require('express')
const Routes = express.Router()

app.post('/create',async(req,res)=>{
    const{branch_no,ven_code,ven_code_run} = req.body

    try{
        connection.query(
            "insert into users(branch_no,ven_code,ven_code_run,pre_name,ven_name,contact_name,add_name,add_no,add_moo,add_soi,add_trog,add_road,add_tumbol,add_amphur,add_provid,add_province,add_zip,add_tel,add_fax,add_email,vengroup_code,vat_type,vat_code,ven_discount,ven_ship_term,ven_ct_code,ven_credit_term,ven_credit_limit,ven_balance,contact_fdate,contact_ldate,cancel_date,rec_memo,ordering_date,ordering_cycle,AF_Status,ven_balance_cs,tax_id,tax_branch_id,tax_branch,dealercode,add_date,add_time,edit_date,edit_time,add_tel1_ext,add_fax_ext,vender_type,add_phone,sap_no)"
            [branch_no,ven_code,ven_code_run],
            // insert ให้แล้ว
            (err,results,fields)=>{
                if(err){
                    console.log('error')
                    return res.status(400)
                }
                return res.status(201).json({message:'new user successfully'})
            }
        )
    }catch(err){
        console.log(err);
        return res.status(500)
    }
})
// post เพิ่มเติมต้องการจัดใหม่หมด ยก caerte tabel sb_vandor มากำหนดค่าใหม่ยกชุด


module.exports = Routes