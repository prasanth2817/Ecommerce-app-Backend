import ImageModel from "../Models/Images.js";

const addImage= async(req, res)=>{
    try{
    const filename = req.file.filename;
    const path = req.file.path;
    const newImage= new ImageModel({
        filename,
        path
})
    await newImage.save()
    res.status(201).send({
        message: 'image uploded Successfully',
        image: newImage,
    });
}catch (error) {
    console.error('Error:', error);
    res.status(500).send({
      error: error.message,
      message: 'Error in creating product',
    });
  }

}

export default addImage