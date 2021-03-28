export class Tarefa {
    id: string;
    titulo: string;
    descricao: string;
    responsavel: string;
    prioridade: string;
    deadline: string;    
    situacao: string;
}

export class Responsavel {
    id: string;
    nome: string;
}

export class Situacao {
    id: string;
    nome: string;
}

export class Prioridade {
    id: string;
    nome: string;
}

export class Login {
    usuario: string;
    senha: string;
}