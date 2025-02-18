import { BaseController, setApiHeaders } from "./baseController";
import db from "../../config"

export const CreateContact: BaseController = [
    "/api/contact",
    async (req, res) => {
        res = setApiHeaders(res)
        try {
            const contact = await db('contacts').insert(req.body, '*')
            res.status(201).json(contact)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                status: false,
                msg: error
            })
        }
    }
]

export const ListContacts: BaseController = [
    '/api/contacts',
    async (req, res) => {
        res = setApiHeaders(res)
        try {
            await db('contacts')
                .then(contacts => res.status(200).json(contacts))
        } catch (error) {
            console.error(error)
            res.status(500).json({
                status: false,
                msg: error
            })
        }
    }
]

export default {}