import mongoose, { Schema } from 'mongoose'
const doctorSchema=new Schema({
    name:{
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
            required :true
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
    },
    specialization:{
        type:String,
        reuired:true
    }
},
{
    timestamps:true
})

const Doctor=mongoose.model('Doctor',doctorSchema);
export default Doctor;