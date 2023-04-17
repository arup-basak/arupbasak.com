import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    github: string,
    about: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json(
        [{
            name: 'Numlify',
            github: "https://github.com/arup-basak/Numlify",
            about: ""
        },
        {
            name: 'arupbasak.co.in',
            github: "https://github.com/arup-basak/arupbasak-co-in",
            about: ""
        },
        {
            name: 'Weather',
            github: "https://github.com/arup-basak/weather",
            about: ""
        },
        {
            name: 'NoteX',
            github: "https://github.com/arup-basak/notex",
            about: ""
        }]
    )
}
