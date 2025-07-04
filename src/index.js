import express from "express"
import products from "./Routes/products.route.js"
import { PORT } from "./Database/config.js"

const app = express()
app.use(express.json());
app.use('/api',products)
app.listen(PORT)
