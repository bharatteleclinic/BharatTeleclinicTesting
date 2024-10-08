import mongoose, { Schema } from 'mongoose'
import { emailValidator, mobileValidator, passwordValidator } from '../utils/validator';
const doctorSchema=new Schema({
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
        enum:["male","female","other"],
        required:true
    },
    contact:{
        email:{
            type:String,
            required:true,
            validate:{
                validator:emailValidator,
                message:"Invalid email"
            }
        },
        mobile:{
            type:String,
            required :true,
            minlength:10,
            maxlength:11,
            validate:{
                validator:mobileValidator,
                message:"Mobile number should be at least 10"
            }
        }
    },
    password:{
        type:String,
        required:true, minlength:8,
        validate:{
            validator:passwordValidator,
            message:"There should be minimum length is 8 and max length is 10"
        }
    },
    experience:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:2
    },
    medicalLicese:{
        type:Schema.Types.ObjectId,
        ref:'License',
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    patient:{
        type:Schema.Types.ObjectId,
        ref:"Patient"
    }
},
{
    timestamps:true
})

const Doctor=mongoose.model('Doctor',doctorSchema);
export default Doctor;