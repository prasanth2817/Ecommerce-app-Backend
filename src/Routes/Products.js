import express from "express" 
import multer from "multer"
import ProductController from "../Controllers/Products.js"

const router= express.Router()

//use of multer package
let storage = multer.diskStorage({
    destination :(req, file, cb)=>{          
        cb(null, 'uploads')
    },
    filename:(req, file, cb)=>{
        cb(null,file.originalname)
    }
})

let maxSize = 2 * 1000 * 1000;
let upload = multer({
    storage : storage,
    limits : {
        fileSize : maxSize
    }
});

router.post("/create",upload.single('image'),ProductController.createProduct)
router.put("/:id",ProductController.editProduct)
router.delete("/:id",ProductController.deleteProduct)
router.get("/",ProductController.getProductsByCategory)
router.get("/:id",ProductController.getProductsById)

export default router