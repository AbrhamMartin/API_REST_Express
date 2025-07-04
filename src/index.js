import express from "express"
import cors from "cors"
import products from "./Routes/products.route.js"
import { PORT, HOST_CLIENT } from "./Database/config.js"

const app = express()
app.use(express.json());
app.use(cors({origin:HOST_CLIENT}))
app.use('/api',products)
app.listen(PORT)
