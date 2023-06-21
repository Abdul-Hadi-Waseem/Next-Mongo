import { Schema , model , models } from "mongoose";
const UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required:[true,'Enter Email Address'],

    },
    fullName:{
        type:String,
        required:[true,"Enter Full Name"],
        minLength:[4,"Name Should Be Atleast 4 Characters Long"],
        maxLength:[30,"Characters Cannot Exceed Length Of 30"],
    },
    password:{
        type:String,
        required:[true,"Enter Password"],
        select:false
    }
})
const User = models.User || model("User" , UserSchema)
export default User