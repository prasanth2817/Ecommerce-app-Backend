import express from "express" 
import CardsController from "../Controllers/Cards.js"

const router= express.Router()

router.post("/create",CardsController.createCard)
router.put("/:id",CardsController.editCard)
router.delete("/:id",CardsController.deleteCard)
router.get("/",CardsController.getCards)

export default router