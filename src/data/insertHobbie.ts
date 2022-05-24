import { connection } from './connection';


export default async function insertHobbie(
    id:string,
    nome:string

){
    await connection.insert(
        {
            id,
            nome
        }
    ).into('Hobby')

}