const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch(() => console.log('Could not connect to MongoDB...',err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author',authorSchema);

const Course = mongoose.model('Course',new mongoose.Schema({
    name: String,
    authors: [authorSchema]
}));

async function createCourse(name,authors) {
    const course = new Course({
        name,
        authors
    })
    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = new Course.find();
    console.log(courses);
}

// async function updateAuthor(courseId) {
//     const course = await Course.updateOne({_id: courseId},{
//         $set: {
//             'author.name' : 'Akshit Dhameliya'
//         }
//     });
    
// }
async function addAuthor(courseId,author){
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

async function removeAuthor(courseId,authorId){
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.deleteOne();
    course.save();
}

//  createCourse('Node Course', [
//     new Author({name: 'Akshit'}),
//     new Author({name: 'john'})
//  ]);

//updateAuthor('646de09ed2da471e286497e9');
removeAuthor('646de933f9a9c3811cf402a7', '646df2f681a3d0d8629b128a');




