import mongoose,{Schema} from "mongoose";

const createModel = new Schema({
   title:String,
   description:String,
   tags: [String]

})

const Posts = mongoose.models.Posts || mongoose.model("Posts",createModel)
export default Posts