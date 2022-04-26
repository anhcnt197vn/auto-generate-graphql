const fs = require('fs');
const path = require('path');

module.exports.lesson = fs.readFileSync(path.join(__dirname, 'lesson.gql'), 'utf8');
module.exports.lessons = fs.readFileSync(path.join(__dirname, 'lessons.gql'), 'utf8');
module.exports.student = fs.readFileSync(path.join(__dirname, 'student.gql'), 'utf8');
module.exports.students = fs.readFileSync(path.join(__dirname, 'students.gql'), 'utf8');
