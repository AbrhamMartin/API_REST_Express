import { config } from "dotenv";
config()

// Puerto en el que se ejecuta express 
export const PORT = process.env.PORT || 3000

// Configuracion de la db
export const DB_PORT = process.env.DB_PORT || 5432
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_USER = process.env.DB_USER || "postgres"
export const DB_PASS = process.env.DB_PASS || ""
export const DB_NAME = process.env.DB_NAME || "products"

// Permitir conexion FRONTEND con cors
export const HOST_CLIENT = process.env.HOST_CLIENT || "http://localhost:5174"