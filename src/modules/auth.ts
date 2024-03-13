import jwt from 'jsonwebtoken'
import bycrypt from 'bcrypt'

export const createJWT = (user) =>{
const token = jwt.sign({id : user.id , username : user.username}, process.env.JWT_SECRET, )
return token
}

export const hashPassword =  (password) =>{
     const hashedPassword =  bycrypt.hash(password , 5)
     return hashedPassword
     
}

export const  comparePassword =  (password , hashedPassword) =>{
       return  bycrypt.compare(password , hashedPassword)

}




export const protect =(req , res , next) =>{
     const bearer = req.headers.authorization
     if(!bearer){
        res.status(401).json({message: 'You are not authorized'})
       return
     }
     const[ ,token] = bearer.split(' ');
      if(!token){
        res.status(401).json({message: 'You are not authorized'})
       return
      }
        

      try {
         const user =  jwt.verify(token , process.env.JWT_SECRET) 
         req.user = user
           next()
      } catch (error) {
          console.log(error)
          res.status(401).json({message: 'You are not authorized'})
          return 
      }


}