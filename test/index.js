var mongoose=require('mongoose');
var kiran=require('./sample');
var url="mongodb://localhost:27017/";
mongoose.connect(url).then((res)=>{
    console.log("connected")
    // console.log(res)
kiran.create({
    id:8,
    name:"viswa",
    gmail:"viswa@gmail.com"
})
.then((val)=>{
    console.log(val)
    //  return kiran.find({});

val.comments.push({
    rating: 5,
    comment: 'only hard work can change once life!',
    author: 'kiran'
    
})
return val.save()
})
.then((num)=>{
    console.log(num)
})
kiran.find({}).then((valu)=>{
    console.log(valu)
})

.catch((err)=>{
    console.log(err)
})
})