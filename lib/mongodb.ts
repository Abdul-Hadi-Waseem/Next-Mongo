import mongoose from 'mongoose'
const {MONGODB_URL} = process.env;
if(!MONGODB_URL){
    throw new Error("Invalid ENV Credentials")
}
export const connectToDb=async()=>{
    try {
        const {connection} = await mongoose.connect(MONGODB_URL)
        if(connection.readyState === 1){
            Promise.resolve(true)
        }
    } catch (error:any) {
        const msg:string = error.message
        return Promise.reject(msg)
    }
}