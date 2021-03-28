import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService } from 'src/app/servicos/tarefa.service';
import { Prioridade, Responsavel, Tarefa } from '../tarefa';

@Component({
  selector: 'app-nova',
  templateUrl: './nova.component.html'
})
export class NovaComponent implements OnInit {

  cadastroForm: FormGroup;
  tarefa: Tarefa = new Tarefa();
  formResult: string = '';
  public responsaveis: Responsavel[];
  public prioridades: Prioridade[];

  constructor(private fb: FormBuilder, private tarefaService: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      id: '',
      titulo: '',
      descricao: '',
      responsavel: '',
      prioridade: '',
      deadline: '',  
      situacao: ''
    });

    this.tarefaService.getAllResponsaveis()
    .subscribe(
      responsaveis => {
        this.responsaveis = responsaveis;
      },
      error => console.log(error)
    );

    this.tarefaService.getAllPrioridades()
    .subscribe(
      prioridades => {
        this.prioridades = prioridades;
      },
      error => console.log(error)
    );

  }

  
  cadastrar() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {

      this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
      this.tarefa.situacao = "Em andamento";
      this.tarefa.id = undefined;
      this.formResult = JSON.stringify(this.tarefa);

      this.tarefaService.cadastrarTarefa(this.tarefa)
      .subscribe(
        tarefa => {
          this.router.navigate(['/lista']);
        }
      );
      
    }
  }

}
