import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import blogSchema from '@/schemas/blog.schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
): Promise<void> {
    const { pid } = req.query

    const URI: any = process.env.MONGO_URI

    try {
        await mongoose.connect(URI)

        const model = mongoose.models.blogs || mongoose.model("blogs", blogSchema)

        const jsonData = await model.findOne({ "pid": pid })
        if(jsonData)
            res.status(200).json(jsonData);
        else
            res.status(502).json({"message": "No Data"});
    } catch (e) {
        console.error(e);
        res.status(500).json({ name: "Internal server error" });
    }
}