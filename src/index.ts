
import app from "./app";
import createStudents from "./endpoints/createStudents";
import createTeacher from "./endpoints/createTeachers";
import createClass from "./endpoints/createClass";
import createSpecialty from "./endpoints/createSpecialty";
import createHobbie from "./endpoints/createHobbie";
import createTeacherWhithSpecialty from "./endpoints/createTeacherWhithSpecialty";
import createStudentWithHobby from "./endpoints/createStudentWithHobby";
import getAgeStudentById from "./endpoints/getAgeStudentById";


app.post('/estudante', createStudents)
app.post('/docente', createTeacher)
app.post('/turma', createClass)
app.post('/especialidade', createSpecialty)
app.post('/hobbie', createHobbie)
app.post('/docente-especialidade', createTeacherWhithSpecialty)
app.post('/estudante-hobbie', createStudentWithHobby)
app.get('/estudante/:id', getAgeStudentById)