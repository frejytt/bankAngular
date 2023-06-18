//import model
const db=require('./db')

//register logic
register=(acno,psw,uname)=>{
    return  db.User.findOne({acno}).then(user=>{
        if(user){
            return{
                message:"user already present",
                status:false,
                statusCode:404
            }
        }
        else{
            newuser=new db.User({
                acno:acno,
                uname:uname,
                psw:psw,
                balance:0,
                transaction:[]
            })
            //to reflect the changes done by server in database
            newuser.save()
            //client should see that newuser is saved
            return{
                message:"registered successfully",
                status:true,
                statusCode:200 
            }
        }

    })
}

//login logic
login=(acno,psw)=>{
    return db.User.findOne({acno,psw}).then(user=>{
        if(user){
            return{
                message:"login success",
                status:true,
                statusCode:200 
            }
        }
        else{
            return{
                message:"incorrect acno or password",
                status:false,
                statusCode:404
            }
        }
    })
}





module.exports={
    register,login  
}