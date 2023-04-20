import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import type { WithId } from 'mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
): Promise<void> {

    const URI: any = process.env.MONGO_URI
    try {
        const client = await MongoClient.connect(URI);
        const db = client.db("site_loading_data");

        const movies = await db
            .collection<WithId<Project>>("projects")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();

        res.status(200).json(movies);
    } catch (e) {
        console.error(e);
        res.status(500).json({ name: "Internal server error" });
    }
}