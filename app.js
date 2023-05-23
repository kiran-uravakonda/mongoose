var mongoose=require('mongoose');
var url="mongodb://localhost:27017/";
var schema=mongoose.Schema
mongoose.connect(url).then((val)=>{
    console.log("connected")
}).catch((err)=>{
    console.log("not connected")
})
var personSchema=new schema({
    name:{type:String},
    age:{type:Number}
})
var person=mongoose.model("person",personSchema)

var newPerson=person({
    name:"akhil",
    age:30,
})
newPerson.save().then((res)=>{
    console.log("success")
    console.log(res)
    return res;
    
})
person.find({}).then((val)=>{
    console.log(val)
})