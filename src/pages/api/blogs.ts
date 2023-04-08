import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import type { WithId } from 'mongodb';

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Data>[]>
): Promise<void> {
    try {
        const client = await MongoClient.connect('mongodb+srv://arupbasak:bhmpeJmXwE2YUGq@arupbasak-co-in.csn5c2c.mongodb.net/test');
        const db = client.db("sample_mflix");

        const movies = await db
            .collection<WithId<Data>>("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        res.status(200).json(movies);
    } catch (e) {
        console.error(e);
        // res.status(500).json({ name: "Internal server error" });
    }
}
