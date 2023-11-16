import mongoose from "mongoose";


const schema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please enter course title"],
        minLength: [4, "Title must be of atleast 4 characters"],
        maxLength: [80, "Title cannot exceed 80 characters"],
    },
    description:{
        type: String,
        required: [true, "Please enter course description"],
        minLength: [20, "Description must be of atleast 20 characters"],
    },
    lectures:[
        {
            title:{
                type: String,
                required: true
            },
            description:{
                type: String,
                required: true
            },
            video:{
                public_id:{
                    type: String,
                    required: true
                },
                url:{
                    type: String,
                    required: true
                },
            },
        },
    ],
    poster:{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },
    },
    views:{
        type: Number,
        default: 0,
    },
    numOfVideos:{
        type: Number,
        default: 0
    },
    category:{
        type: String,
        default: true,
    },
    createdBy:{
        type: String,
        default: [true, "Enter the author name"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});


export const Course = mongoose.model("Course",schema);