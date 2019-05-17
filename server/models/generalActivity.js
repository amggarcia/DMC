import mongoose from 'mongoose';

const generalActivitySchema =  new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
});

const GeneralActivity = mongoose.model('GeneralActivity',generalActivitySchema);

export default GeneralActivity;