const mongoose = require('mongoose');                     

mongoose.connect('mongodb://localhost/playground')         //connect to mongodb
   .then(() => console.log('connected to mongodb...'))
   .catch(err => console.log('Could not connect to mongodb...',err));

const courseSchema = new mongoose.Schema({                 //Schema
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true,
        enum : ['web','app','network']
    },
    author: String,
    tags: {
        type: Array,
        validate:{
            isAsync:true,
            validator: function(v,callback){
                setTimeout(() => {
                   const result = v && v.length > 0;
                   callback(result);
                },4000);
                //return v && v.length > 0;
            },
            message:'A course should have at least one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type:Number,
        required: function(){return this.isPublished; },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

const Course  = mongoose.model('Course',courseSchema);     //models

async function createCourse(){
    const course = new Course({
        name : 'Node.js Course',    //req.body.name
        category: '-', 
        author : 'Akshit',
        tags : ['Node','Backend'],
        isPublished : true,
        price:15
    });
    try{
        const result = await course.save();                    //saving a document
        console.log(result);
    }
    catch(ex){
        for(field in ex.errors)
        console.log(ex.errors[field].message);
    }
}

async function getCourses(){
    const pageNumber= 2;
    const pageSize = 10;
    const courses = await Course
    .find({_id: '646b27046f8d91978f55b58d'})         //querying document
    // .find({price: {$gte: 10, $lte: 20}})                //comparison query operators
    // .find({price:{$in: [10,15,20]}})     
    // .find()
    //.or([ {author: 'Akshit'} , {isPublished: 1}])        //logical or query operator
    //.and(['same as first find method'])                  //logical and query operator

    //regular expressions                                 //Regular expressions
    //start with 
    // .find({author: /^Akshit/ })
    //ends with
    // .find({ author: /Dhameliya$/i})   //i is for case-insencetiveness
    //contain Akshit
    // .find({author: /.*Akshit.*/i})



    //.skip((pageNumber - 1)*pageSize)
    //.limit(pageSize)
    .sort({name: 1})
    .select({name: 1, tags: 1,price: 1})
    //.count()                                               //counting
    console.log(courses[0].price);
}
// getCourses();

//Updating a document-query first
// async function updateCourse(id){
//     const course = await Course.findById(id);
//     if(!course) return;

//     course.isPublished= true;
//     course.author = 'Another Author'; 

//     const result = await course.save();
//     console.log(result);
// }

//Updating document-Update first
// async function updateCourse(id){
//     const course = await Course.findByIdAndUpdate(id,{
//         $set: {
//             author: 'Akshit',
//             isPublished: false
//         }
//     },{new: true});
//     console.log(course);
// }
        
// updateCourse('64670e358e64f41035e7ae28');

//Removing Documents
async function removeCourse(id){
   //const course = await Course.deleteOne({_id:id});
   //const course = await Course.deleteMany({_id:id});
   const course = await Course.findByIdAndRemove(id)
   console.log(course);
}
    
getCourses();










