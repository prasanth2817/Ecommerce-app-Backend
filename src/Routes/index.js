import express from "express"
import UsersRoutes from "./Users.js"
import ProductsRoutes from "./Products.js"
const router = express.Router()

router.use("/user",UsersRoutes)
router.use("/products",ProductsRoutes)

export default router