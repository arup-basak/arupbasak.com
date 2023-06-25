import type { NextApiRequest, NextApiResponse } from 'next';
import {model, models} from 'mongoose';
import blogSchema from '@/schemas/blog.schema';
import connectDB from '@/lib/mongo';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
): Promise<void> {
    connectDB()
    try {
        const myModel = models.blogs || model("blogs", blogSchema)

        const jsonData = await myModel.find({})

        res.status(200).json(jsonData);
    } catch (e) {
        console.error(e);
        res.status(500).json({ name: "Internal server error" });
    }
}