import GeneralActivity from './models/generalActivity';
import mongoose from 'mongoose';

//After the address is the database name in this case .../DMC
const mongoConAdmin = 'mongodb+srv://admin:hcENHLOjZBM8GZ1a@cluster0-06naj.mongodb.net/DMC?retryWrites=true';
const mongoCon  =  'mongodb+srv://dmcApp:xTaaianFRZ00Vrws@cluster0-06naj.mongodb.net/DMC?retryWrites=true';
mongoose.connect(mongoCon);
const models = { GeneralActivity};

var db = mongoose.connection;
db.on('error', function(){console.log('failed to connect to database')});
db.once('open', function(){
    console.log("Connection established");
})

const activity = new models.GeneralActivity({
    name : 'testActivity1',
    description : 'wonderful activity1',
});

activity.save();