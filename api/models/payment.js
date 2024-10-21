import mongo from "mongoose"

const paymentSchema = new mongo.Schema(
    {
        title: 
        {
            type: String,
            required: true,
        },
        url:
        {
            type: String,
            required: true,
            unique: true,
        },
        logo: 
        {
            type: String,
        },
        components:
        {
            type: Array,
            required: false,
            x: {}
        },
    }
)

const Page = mongo.model ( "Page", pageSchema );
export default Page;