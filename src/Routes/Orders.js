import express from "express"
import OrderController from "../Controllers/Orders.js"

const router = express.Router()

router.post("/createorder",OrderController)

export default router