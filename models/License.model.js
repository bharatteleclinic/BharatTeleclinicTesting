import mongoose, {Schema} from 'mongoose'
const LicenseSchema=new Schema({
    issuingState:{
        type:String,
        required:true
    },
    licenseNumber:{
        type:String,
        required:true
    },
    expirationDate:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});
const License=mongoose.model("License",LicenseSchema)
export default License;