const mongoose=require('mongoose');



const eventsschema=mongoose.Schema({

   event_time:{
       type:Date,
       required:true,
   },
   description:{
       type:String,
       required: true,
   },
   name:{
       type:String,
       required:true,
   },
   public_view:{
       type:Boolean,
       default:false,
   },
    user_id:{
       type:String,
        required:true,
    },

});
const events=mongoose.model('events',eventsschema);


exports.events=events;