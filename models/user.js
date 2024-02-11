// // User model (models/user.js)
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   phoneNumber: { type: String, required: true }, // Add phone number field
// });

// const User = mongoose.model('User', userSchema);

// export default User;


import {Schema , model} from "mongoose";

const userSchema = new Schema(
    {
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
    }
);


export default model("User", userSchema);

