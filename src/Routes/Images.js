import express from "express"
import multer from "multer"
import ImageController from "../Controllers/Images.js"

const router= express.Router();

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

router.post("/upload",upload.single('image'),ImageController)

export default router