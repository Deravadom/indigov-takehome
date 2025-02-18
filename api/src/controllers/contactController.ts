import { BaseController, setApiHeaders } from "./baseController";
import db from "../../config"
import fs from "fs"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "kay.vonrueden@ethereal.email",
        pass: "rsVRzmJBRu7neRzhk9"
    }
})

export const CreateContact: BaseController = [
    "/api/contact",
    async (req, res) => {
        res = setApiHeaders(res)
        try {
            const contact = await db('contacts')
                .insert(req.body, '*')
                .onConflict('email')
                .merge(['email', 'firstName', 'lastName', 'street1', 'street2', 'city', 'state', 'zip', 'updatedAt'])
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

export const ExportContacts: BaseController = [
    "/api/contacts/export",
    async (req, res) => {
        res = setApiHeaders(res)
        try {
            const csvWriter = fs.createWriteStream('/tmp/export.csv')
            // @ts-ignore
            await db.select().from('contacts').toStreamCSV(csvWriter)

            const info = await transporter.sendMail({
                from: '"Kay VonRueden" <"kay.vonrueden@ethereal.email">',
                to: req.body.email,
                subject: "Exported CSV",
                text: "Hello CSV!",
                html: "<b>Hello csv?</b>",
                attachments: [
                    { filename: "export.csv", content: fs.createReadStream("/tmp/export.csv") }
                ]
            })

            res.status(200).json({ messageId: info.messageId })

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