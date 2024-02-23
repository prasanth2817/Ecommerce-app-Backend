import express from "express"
import OrderController from "../Controllers/Orders.js"

const router = express.Router()

router.post("/createorder",OrderController.createOrders)
router.get("/getorders",OrderController.getOrders)

export default router