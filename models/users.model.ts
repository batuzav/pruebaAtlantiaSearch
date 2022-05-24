import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true, 
    },

    birtday: {
        type: String,
        required: true,
    },

    age: {
        type: String,
        required: true,
    }
})

export default model('Users', userSchema)