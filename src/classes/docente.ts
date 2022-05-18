export class Docentes {
    private id: string;
    private nome: string;
    private email: string;
    private data_nasc: string;
    private turma_id: string;
    private hobbies: string;

    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        hobbies: string
    ) {
        console.log("chamando constructor da Docentes")
        this.id = id
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
        this.hobbies = hobbies
    }

    public getId(): string {
        return this.id
    }

    public getNome(): string{
        return this.nome
    }

    public getEmail(): string{
        return this.email 
    }

    public getData_nasc(): string {
        return this.data_nasc
    }

    public getTurma_id(): string {
        return this.turma_id
    }

    public getHobies(): string {
        return this.hobbies
    }
}

