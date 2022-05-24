import { connection } from './connection';


export default async function insertTeacherWhithSpecialty(
    id: string,
    docente_id:string,
    especialidade_id:string

){
    await connection.insert(
        {
            id,
            docente_id,
            especialidade_id
        }
    ).into('Docente_Especialidade')

}