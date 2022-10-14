const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/EnquiryPage",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then( ()=>{
    console.log("connection sucessFully...");
}).catch( (err)=>{
    console.log(err)
})
