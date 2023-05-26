const mongoose = require('mongoose');
const { select } = require('underscore');

mongoose.connect('mongodb://localhost/mongo')
 .then(() => console.log('connected to mongodb...'))
 .catch(err => console.log('could not connect to mongodb...',err))

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    data : {type: Date,default: Date.now},
    isPublished : Boolean,
    price : Number
})

const Course = mongoose.model('Course',courseSchema);
// async function createCourse(){
//     const course = new Course({
//         name : 'Node.js Course',
//         author : 'Akshit',
//         tags : ['Node','Back-end'],
//         isPublished : true,
//         price: 5
//     });
//    const result = await course.save();
//    console.log(result);
// }
// createCourse()

async function getCourses(){
    return await Course
    //.find({isPublished : true,tags : {$in:['Front-end','Back-end']}})
    .find({isPublished: true})
    .or([ {price: {$gte: 15}}, {name: /.*by.*/i}])
    .sort('-price')
    .select('name author price') 

}

async function run(){
    const courses = await getCourses();
    console.log(courses);
}
run();

