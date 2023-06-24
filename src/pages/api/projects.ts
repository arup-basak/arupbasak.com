import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import blogSchema from '@/schemas/blog.schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
): Promise<void> {

    const URI: any = process.env.MONGO_URI

    try {
        await mongoose.connect(URI)

        const model = mongoose.models.projects || mongoose.model("projects", blogSchema)

        const jsonData = await model.find({})

        res.status(200).json(jsonData);
    } catch (e) {
        console.error(e);
        res.status(500).json({ name: "Internal server error" });
    }
}