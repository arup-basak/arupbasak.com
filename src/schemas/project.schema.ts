import { Schema } from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    long_desc: {
        type: String,
        required: true
    },
    links: {
        github: {
            type: String,
            required: false
        },
        hosted_site: {
            type: String,
            required: false
        },
        playstore_link: {
            type: String,
            required: false
        }
    }
});

export default projectSchema