import { connection } from './connection';
import { MODULO } from '../types';

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