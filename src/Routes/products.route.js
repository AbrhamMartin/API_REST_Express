import { Router } from "express";
import { db } from "../Database/conexion.js";

const router = Router();

router.get("/api/productos", async (_, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM producto");
    res.json(rows);
  } catch (err) {
    console.error("Error al obtener producto:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/api/productos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query("SELECT * FROM producto WHERE id = $1", [
      id,
    ]);
    if (!rows.length) return res.status(404).json({ message: "No encontrado" });
    return res.json(rows);
  } catch (err) {
    console.error("Error al obtener producto:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.delete("/api/productos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response  = await db.query("DELETE FROM producto WHERE id = $1 RETURNING *", [id]);
    if (!response.rowCount)
      return res.status(404).json({ message: "No encontrado" });
    return res.status(204).send()
  } catch (err) {
    console.error("Error al obtener producto:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

export default router;
