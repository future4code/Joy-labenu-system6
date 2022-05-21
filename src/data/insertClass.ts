import { MODULO } from '../types';
import { connection } from './connection';



export default async function insertClass(
    id: string,
    nome: string,
    modulo: MODULO[],

) {
    await connection.insert(
        {
            id,
            nome,
            modulo
        }
    ).into('Turma')
}