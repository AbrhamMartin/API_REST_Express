import express from "express"
import products from "./Routes/products.route.js"
import { PORT } from "./Database/config.js"

const app = express()
app.use(products)
app.use(express.json());
app.listen(PORT)