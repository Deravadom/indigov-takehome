import express from "express";
import cors from "cors"
import { setApiHeaders } from "./controllers/baseController"
import { CreateContact, ExportContacts, ListContacts } from "./controllers/contactController";

const PORT = 3000;

const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/healthcheck", (req, res) => {
    res = setApiHeaders(res)
    res.json({ foo: "bar" })
});

app.get(...ListContacts)
app.post(...CreateContact)
app.post(...ExportContacts)

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
