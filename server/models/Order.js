import { model,Schema} from "mongoose";

const orderSchema = new Schema({

  userId:{
     type: Schema.Types.ObjectId,
     ref:"User",
     required:true
  },

  products:[{

    productId:{
     type:Schema.Types.ObjectId,
    ref:"Product",
    required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    price:{
        type :Number,
        required:true
    }
  }],

  totalBill:{
    type:Number,
    required:true
  },
  
  address:{
    type:String,
    required:true
  },

  phoneNumber:{
    type:String,
    required:true
  },

  paymentMode:{
    enum:["COD", "UPI","Bank Transfer"],
    required:true
  },

//  paymentId:{
//     ref:"Payment",
//     status:["pending","Delivered","Cancel"]
//  }
})

const Order= model("Order",orderSchema);
export default Order;