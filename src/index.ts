import app  from './server'
import * as dotenv from 'dotenv'
dotenv.config() // import  all env variables from env file to but prisma will able to access database url because it have something else for searching
// we added this in our  entry file then it will be available to all the files in our project
app.listen(3001, () => {    
    console.log('Server is running on port 3001');
 });