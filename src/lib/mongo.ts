import mongoose from 'mongoose';

const URI: any = process.env.MONGO_URI

const connectDB = async () => {
    await mongoose.connect(URI)
}

export default connectDB