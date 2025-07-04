import { db } from "../Database/conexion.js";

export const getProducts = async (_, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM producto");
    res.json(rows);
  } catch (err) {
    console.error("Error al obtener producto:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getOneProduct = async (req, res) => {
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
};

export const delProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await db.query(
      "DELETE FROM producto WHERE id = $1 RETURNING *",
      [id]
    );
    if (!response.rowCount)
      return res.status(404).json({ message: "No encontrado" });
    return res.status(204).send();
  } catch (err) {
    console.error("Error al obtener producto:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const insProduct = async (req, res) => {
  const { nombre, precio, user_id, fecha } = req.body;

  try {
    const { rows } = await db.query(
      "INSERT INTO producto (nombre, precio, user_id, fecha) VALUES ($1, $2, $3, $4) RETURNING *",
      [nombre, precio, user_id, fecha ?? new Date()]
    );
    return res.send(rows[0]);
  } catch (err) {
    console.error("Error al obtener producto:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const updProduct = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, user_id, fecha } = req.body;

  try {
    const { rows } = await db.query(
      "UPDATE producto SET nombre = COALESCE($1, nombre), precio = COALESCE($2, precio), user_id = COALESCE($3, user_id), fecha = COALESCE($4, fecha) WHERE id = $5 RETURNING *",
      [nombre, precio, user_id, fecha, id]
    );
    if (!rows.length) return res.status(404).json({ message: "No encontrado" });
    return res.status(202).json(rows[0]);
  } catch (err) {
    console.error("Error al obtener producto:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
