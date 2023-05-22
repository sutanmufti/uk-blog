export interface CustomFieldLocation {
    id: string,
    name: string,
    type: "location"
    value?: {
        location: {lat: number, lng: number},
        formatted_address: string
    }
}

export interface CustomFieldImage {
    id: string,
    name: string,
    type: "attachment"
    value?: {
        thumbnail_small: string
        thumbnail_medium: string
        thumbnail_large: string
        mimetype: string
        size: number
        url: string
        url_w_query: string
        url_w_host: string
    }[]
}


export interface Tasks {
    id: string
    custom_id: string
    name: string
    text_content: string
    description: string
    date_created: string
    status: {
        status: string,
        color: string,
    },
    creator: {
        id: number,
        username: string,
        profilePicture: string
    },
    custom_fields: (CustomFieldLocation | CustomFieldImage)[]
}




export type StorySuccess  = typeof ResponseText 
export type StoryError = {err:"Team not authorized",ECODE:"OAUTH_027"}

export type Story  = StorySuccess & StoryError
export type Comment = typeof comments

export type Task = typeof Task