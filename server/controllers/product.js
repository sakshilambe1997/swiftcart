import Product from "../models/Product";

const postProduct = async(req,res)=>{
    const {name,shortDescription,longDescription,price,currentPrice,category,images}= req.body

    const product =new Product({
        name,
        shortDescription,
        longDescription,
        price,currentPrice,
        category,
        images,
        
    })

    try{
        const savedProduct =await product.save();

        res.json({
            success: true,
            message: `Product added Succsessfully`,
            data: savedProduct
        })
    }

    catch(e){
         res.json({
            success: false,
            message: e.message,
            data: null
        })
    }

}