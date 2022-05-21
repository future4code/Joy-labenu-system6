
import app from "./app";
import createStudents from "./endpoints/createStudents";
import createTeacher from "./endpoints/createTeachers";
import createClass from "./endpoints/createClass";
import createSpecialty from "./endpoints/createSpecialty";
import createHobbie from "./endpoints/createHobbie";
import createTeacherWhithSpecialty from "./endpoints/createTeacherWhithSpecialty";
import createStudentWithHobby from "./endpoints/createStudentWithHobby";
import getAgeStudentById from "./endpoints/getAgeStudentById";

import selectAllStudents from "./endpoints/selectAllStudents"
import selectAllClass from "./endpoints/selectAllClass"
import selectAllTheacher from "./endpoints/selectAllTheacher"
import searchStudent from "./endpoints/searchStudent"
import editClassModule from "./endpoints/editClassModule" 
import editStudentClass from "./endpoints/editStudentClass" 
import editTeacherClass from "./endpoints/editTeacherClass" 



app.post('/estudante', createStudents)
app.post('/docente', createTeacher)
app.post('/turma', createClass)
app.post('/especialidade', createSpecialty)
app.post('/hobbie', createHobbie)
app.post('/docente/especialidade', createTeacherWhithSpecialty)
app.post('/estudante/hobbie', createStudentWithHobby)
app.get('/estudante/:id', getAgeStudentById)
app.get('/estudantes', selectAllStudents)
app.get('/turmas', selectAllClass)
app.get('/docentes', selectAllTheacher)
app.get('/search', searchStudent) 
app.put('/estudante/:id', editStudentClass)
app.put('/docente/:id', editTeacherClass)
app.put('/turma/:id', editClassModule)

