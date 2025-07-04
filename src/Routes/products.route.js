import { Router } from "express";
import {
  getProducts,
  getOneProduct,
  delProduct,
  insProduct,
  updProduct,
} from "../Controllers/products.controller.js";

const router = Router();

router.get("/productos", getProducts);

router.get("/productos/:id", getOneProduct);

router.delete("/productos/:id", delProduct);

router.post("/productos", insProduct);

router.patch("/productos/:id", updProduct);

export default router;
