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
//         isPublished : true
//     });
//    const result = await course.save();
//    console.log(result);
// }
// createCourse()

async function getCourses(){
    return await Course
.find({isPublished : true,tags : /.*Back-end.*/,tags:/.*Front-end.*/})
    .sort({price: -1})                //also ('-price')
    .select({name: 1 , author: 1})    //also ('name author')

}

async function run(){
    const courses = await getCourses();
    console.log(courses);
}
run();

