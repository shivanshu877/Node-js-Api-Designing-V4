import express from 'express' 
import router from './router' 
import morgan from 'morgan'
import cors from 'cors' //  restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
const app = express()
app.use(cors()) //It can be used to enable CORS with various options.
app.use(morgan('dev')) //It can be used to log requests, errors, and more to the console    
app.use(express.json()) //It can be used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.urlencoded({extended: true})) //It can be used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.    
app.get('/' ,(req , res) => {
console.log("hello")
res.status(200)
res.json({message: 'hello'});
});

app.use('/api', router)
export default app 
