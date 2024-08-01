import mongoose from "mongoose";

// post schema
let postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
});

let postModel: any;

try {
    postModel = mongoose.model('post');
} catch (error) {
    postModel = mongoose.model('post', postSchema);
}

export { postModel };