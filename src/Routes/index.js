import express from "express"
import UsersRoutes from "./Users.js"
import ProductsRoutes from "./Products.js"
import OrderRoutes from "./Orders.js"

const router = express.Router()

router.use("/user",UsersRoutes)
router.use("/products",ProductsRoutes)
router.use("/orders",OrderRoutes)

export default router