import mongo from "mongoose";

const blogSchema = new mongo.Schema({
    title : {
        type: String,
        required: true
    },
    subTitle : {
        type: String,
        required: true,
    },
    subTitle1 : {
        type: String,
        required: true,
    },
    subTitle2 : {
        type: String,
        required: true,
    },
    subTitle3 : {
        type: String,
        required: true,
    },
    subTitle4 : {
        type: String,
        required: true,
    },
    contentTitle: {
        type: String,
        required: true
    },
    contentSubTitle : {
        type: String,
        required: true,
    },
    contentSubTitle1 : {
        type: String,
        required: true,
    },
    contentSubTitle2 : {
        type: String,
        required: true,
    },
    contentSubTitle3 : {
        type: String,
        required: true,
    },
    contentSubTitle4 : {
        type: String,
        required: true,
    },
    url : {
        type: String,
        required: true,
        unique: true,
    },
    thumbnail: {
        type: String,
        default: ""
    },
    author : {
        type: String,
        required: true
    },
}, {timestamps: true}
)

const Blog = mongo.model("blog", blogSchema);
export default Blog;