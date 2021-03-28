import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MyInMemoryService implements InMemoryDbService {

  // In-Memory DB will intercept /api/whatever calls and return data
  createDb() {

    const tarefas = [
      { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição tarefa 1', responsavel: 'João', prioridade: 'Baixa', deadline: '2020-03-29', situacao: 'Em andamento' },
      { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição tarefa 2', responsavel: 'Antônio', prioridade: 'Média', deadline: '2020-03-30', situacao: 'Em andamento' },
      { id: 3, titulo: 'Tarefa 3', descricao: 'Descrição tarefa 3', responsavel: 'João', prioridade: 'Alta', deadline: '2020-03-31', situacao: 'Concluído' },
    ]

    const responsaveis = [
      { id: 0, nome: 'Selecione'},
      { id: 1, nome: 'João'},
      { id: 2, nome: 'Antônio'},
      { id: 3, nome: 'Pablo'}
    ]

    const prioridades = [
      { id: 0, nome: 'Selecione'},
      { id: 1, nome: 'Baixa'},
      { id: 2, nome: 'Média'},
      { id: 3, nome: 'Alta'}
    ]

    const situacoes = [
      { id: 0, nome: 'Selecione'},
      { id: 1, nome: 'Em andamento'},
      { id: 2, nome: 'Concluído'}
    ]

    return { tarefas, responsaveis, prioridades, situacoes } // add as many end-points you want
  }

}