import CardModel from "../Models/Cards";

const createCard = async (req, res) => {
    try {
      const { title,imageUrl } = req.body;
      const newCard = new CardModel({ title,imageUrl});
      const savedCard = await newCard.save();
      res.status(201).send({
        message: 'Card Created Successfully',
        Card: savedCard ,
    });
      
  } catch (error) {
      console.error('Error: ', error);
      res.status(500).send({
        error: error.message,
        message: 'Error in creating product',
      });
    }
  };

  const editCard= async(req,res)=>{
    try {
      let Card= await CardModel.findById({_id:req.params.id})
      if(Card){
        Card.title= req.body.title
        Card.imageUrl= req.body.imageUrl
    await Card.save()
    res.status(200).send({message:"Card Edited Sucessfully"})
      }
      else
      res.status(400).send({message:"Card Not Found"})
    } catch (error) {
      console.error('Error: ', error);
        res.status(500).send({
          error: error.message,
          message: 'Error in creating card',
        });
    }
      }
    
      const deleteCard = async (req, res) => {
        try {
          let Card = await CardModel.findById({_id:req.params.id});
          if (Card) {
            await Card.deleteOne();
            res.status(200).send({ message: 'Card Deleted Successfully' });
          } else {
            res.status(404).send({ message: 'Card Not Found' });
          }
        } catch (error) {
          console.error('Error: ', error);
          res.status(500).send({
            error: error.message,
            message: 'Error in deleting card',
          });
        }
      };
    
      const getCards= async(req,res)=>{
        try {
          const Cards = await CardModel.find({})
          if(Cards.length>0)
          res.status(200).send({message:"Cards Fetched successfully",
        Card: Cards})
        else
        res.status(400).send({message:"No Cards found"})
        } catch (error) {
          console.error('Error: ', error);
          res.status(500).send({
            error: error.message,
            message: 'Error in getting Cards',
          });
        }
      }

      export default {
        createCard,
        editCard,
        deleteCard,
        getCards
      }