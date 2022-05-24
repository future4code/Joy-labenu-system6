import { connection } from './connection';


export default async function insertTeacher(
    id: string,
    nome:string,
    email:string,
    data_nasc:string,
    turma_id:string,
 
   
){
    await connection.insert(
        {
            id,
            nome,
            email,
            data_nasc,
            turma_id
        }
    ).into('Docente')
}