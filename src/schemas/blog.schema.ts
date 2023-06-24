import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    heading: String,
    pid: String,
    data: String,
    time: String,
    writer: String
})

export default blogSchema