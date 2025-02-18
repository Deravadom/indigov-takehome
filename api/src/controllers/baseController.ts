import { RequestHandler, Response } from "express"

export type BaseController = [
    path: string,
    handler: RequestHandler
]

export const setApiHeaders = (res: Response) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res
}

export default {} 