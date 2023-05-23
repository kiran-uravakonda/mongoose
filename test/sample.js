var mongoose=require('mongoose');
var schema=mongoose.Schema
var commentSchema = new schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
var empSchema=new schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true

    },
    gmail:{
        type:String,
        required:true,
        unique:true
    },
    
        comments:[commentSchema]
    
},
    {
    timestamps:true,
    }
)

var employee=mongoose.model("emp",empSchema);
module.exports=employee;