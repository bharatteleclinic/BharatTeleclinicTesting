import mongoose, { Schema } from 'mongoose'
const pharmaSchema=new Schema({
    firstName:{
        type:String,
        maxlength:20,
        minlength:3,
        required:true
    },
    lastName:{
        maxlength:20,
        minlength:3,
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contact:{
        email:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required :true,
            validate:{
                validator:()=>{}
            }
        }
    },
    experience:{
        type:Number,
        required:true
    },
    medicalLicese:{
        type:Schema.Types.ObjectId,
        ref:'License',
        required:true
    }
},
{
    timestamps:true
})
 
const Pharma=mongoose.model('Pharma',doctorSchema);
export default Pharma;