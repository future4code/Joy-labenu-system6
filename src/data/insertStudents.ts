import { connection } from './connection';

export default async function insertStudents(

    id:string,
    nome:string,
    email:string,
    data:string,
    turma_id:string
   

){
    await connection.insert(
        {
            id,
            nome,
            email,
            data_nasc:data,
            turma_id
          
        }
    ).into('Estudante') 
}