import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService } from '../../servicos/tarefa.service';
import { Prioridade, Responsavel, Situacao, Tarefa } from '../tarefa';

@Component({
  selector: 'app-lista',
  providers: [TarefaService],
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  constructor(private fb: FormBuilder, private tarefaService: TarefaService, private router: Router) { }

  public tarefa: Tarefa;
  public tarefas: Tarefa[];
  public responsaveis: Responsavel[];
  public situacoes: Situacao[];

  pesquisaForm: FormGroup;

  ngOnInit(): void {

    this.pesquisaForm = this.fb.group({      
      id: '',
      titulo: '',
      descricao: '',
      responsavel: '',
      prioridade: '',
      deadline: '',  
      situacao: ''
    });


    this.tarefaService.getAllTarefas()
    .subscribe(
      tarefas => {
        this.tarefas = tarefas;
      },
      error => console.log(error)
    );

    this.tarefaService.getAllResponsaveis()
    .subscribe(
      responsaveis => {
        this.responsaveis = responsaveis;
      },
      error => console.log(error)
    );

    this.tarefaService.getAllSituacoes()
    .subscribe(
      situacoes => {
        this.situacoes = situacoes;
      },
      error => console.log(error)
    );

  }

  pesquisar(){
    this.tarefa = Object.assign({}, this.tarefa, this.pesquisaForm.value);            
    this.tarefaService.pesquisarTarefas(this.tarefa)
    .subscribe(
      tarefas => {
        this.tarefas = tarefas;
      }
    );
  }

}
