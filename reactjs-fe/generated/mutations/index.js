const fs = require('fs');
const path = require('path');

module.exports.assignStudentToLesson = fs.readFileSync(path.join(__dirname, 'assignStudentToLesson.gql'), 'utf8');
module.exports.createLesson = fs.readFileSync(path.join(__dirname, 'createLesson.gql'), 'utf8');
module.exports.createStudent = fs.readFileSync(path.join(__dirname, 'createStudent.gql'), 'utf8');
