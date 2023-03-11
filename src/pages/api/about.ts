import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    title: string,
    about: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(
        {
            name: 'Arup Basak',
            title: "Versatile Enthusiastic Programmer", 
            about: 'As a B.Tech student, I have spent the last two years learning and working towards my goal of becoming an expert in Android development. I am passionate about new technology and always try to keep up with the latest trends and innovations in my field. I am dedicated to my studies and work hard to achieve my goals. In my free time, I enjoy learning about new technologies and exploring the latest tools and platforms for developing Android apps. I believe that with my skills and determination, I can succeed as a freelancer and make a positive impact in the field of Android development.'
        }
    )
}
