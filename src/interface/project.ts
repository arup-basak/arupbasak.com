export interface ProjectLink {
    "github"?: string,
    "playstore"?: string,
    "hosted_site"?: string
}

export interface Project {
    _id: string,
    name: string,
    "short_desc": string,
    "long_desc": string,
    "links": ProjectLink
}