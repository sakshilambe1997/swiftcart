import Product from "../models/Product";

const postProduct = async(req,res)=>{
    const {name,shortDescription,longDescription,price,currentPrice,category,images}= req.body

    const product =new Product({
        name,
        shortDescription,
        longDescription,
        price,
        currentPrice,
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


const getProducts= async(req,res)=>{
    const {productId}=req.query;

    const product = await Product.findById(productId);

    if(!product){
        return res.json({
            success:false,
            message:"Product not Found",
            data:null
        })
    }

    const Oneproduct = await Product.find({user:userId}).sort({createdAt:-1});

      res.json({
        sucess:true,
        message:"Product fetched successfully",
        data:Oneproduct
    })
}

const delProduct = async(req,res)=>{
    const {id}=req.params

    await Product.deleteOne({_id:id});

     res.json({
        success:true,
        message:"Producr Deleted Successfully",
        data:null
    })
}

export {postProduct, getProducts,delProduct}

