import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    name:String,
    email : {
        type:String,
        unique: true,
        required:[true, "Please enter valid email"]
    },
    password: {
        type:String,
        required:[true, "Please enter valid Password"],
        select: false
    },


    timeline:[
        {
            title: String,
            description: String,
            date: Date,
        }
    ],

    skills:{
        image1:{
            public_id: String,
            url: String
        },
        image2:{
            public_id: String,
            url: String
        },
        image3:{
            public_id: String,
            url: String
        },
        image4:{
            public_id: String,
            url: String
        },
        image5:{
            public_id: String,
            url: String
        },
        image6:{
            public_id: String,
            url: String
        },
    },
    projects:[
        {
            url: String,
            title:String,
            image:{
                public_id: String,
                url:String,

            },
            description: String,
            techStack:String
        }
    ],

    about:{
        name:String,
        title:String,
        subtitle:String,
        description:String,
        quote:String,
        avatar:{
            public_id:String,
            url: String
        }
    }

    
})


// Mongoose will use the "pluralized" "lowercase" version of the model name to determine the collection name.

export const User = mongoose.model("User" , userScheme)