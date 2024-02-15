import express from "express"
import UsersRoutes from "./Users.js"
import ProductsRoutes from "./Products.js"
import ImagesRoutes from "./Images.js"
const router = express.Router()

router.use("/user",UsersRoutes)
router.use("/products",ProductsRoutes)
router.use("/images",ImagesRoutes)

export default router