import { BaseController, setApiHeaders } from "./baseController";
import db from "../../config"

export const CreateContact: BaseController = [
    "api/contact",
    async (req, res) => {
        res = setApiHeaders(res)
        try {
            const contact = db('contacts').insert(req.body, '*')
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

export default {}