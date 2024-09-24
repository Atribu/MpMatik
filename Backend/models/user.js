import mongo from "mongoose";

const userSchema = new mongo.Schema({
    username: 
    {
        type: String,
        required: true,   
    },
    name: 
    {
        type: String,
        required: true,
    },
    email: 
    {
        type: String,
        required: true,
        unique: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    photo:
    {
        type: String
    }
});

const User = mongo.model("User", userSchema);
export default User;