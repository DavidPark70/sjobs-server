import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    qualifications: String,
    companyName: String,
    location: String,
    applicationUrl: String,
    jobType: String,
    salary: String,
    creator: String,
    name: String,
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostDescription = mongoose.model('PostDescription', postSchema);

export default PostDescription;