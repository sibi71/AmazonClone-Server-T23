const jwt = require("jsonwebtoken")

function getUser(req,res,next){
    const token = req.headers["authorization"]
    if(token){
        jwt.verify(token , process.env.SECRET_KEY,(err,decodedToken)=>{
            if(err){
                return res.json({
                    msg:"Access Denied"
                })
            }
            else{
                req.userId = decodedToken.userId;
                next();
            }
        })
    }
    else{
        return res.json({
            msg:"Access Denied"
        })
    }
}

module.exports = getUser ;