import { connection } from './connection';

export default async function insertStudentWithHobby(
    id: string,
    estudante_id: string,
    hobby_id: string

){
    await connection.insert(
        {
            id,
            estudante_id,
            hobby_id
        }
    ).into('Estudante_Hobby')

}