import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/servicos/tarefa.service';
import { Prioridade, Responsavel, Tarefa } from '../tarefa';

@Component({
  selector: 'app-editar',
  providers: [TarefaService],
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {

  tarefa: Tarefa = new Tarefa();
  tarefaForm: FormGroup;
  responsaveis: Responsavel[];
  prioridades: Prioridade[];

  constructor(private fb: FormBuilder,
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router) {

    var id = this.route.snapshot.params['id'];    
    this.tarefaService.obterPorId(id)
     .subscribe(
        tarefa => {
          this.tarefa = tarefa;
          this.preencherForm();
        },
        error => console.log(error)
      );  
  }

  ngOnInit(): void {    
   
    this.tarefaForm = this.fb.group({
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

  preencherForm() {

    this.tarefaForm.patchValue({
      id: this.tarefa.id,
      titulo: this.tarefa.titulo,
      descricao: this.tarefa.descricao,
      responsavel: this.tarefa.responsavel,
      prioridade: this.tarefa.prioridade,
      deadline: this.tarefa.deadline,  
      situacao: this.tarefa.situacao
    });

  }
  
  salvar() {
    
    // if (this.tarefaForm.dirty && this.tarefaForm.valid) {
      
      this.tarefa = Object.assign({}, this.tarefa, this.tarefaForm.value);

      this.tarefaService.atualizarTarefa(this.tarefa)
      .subscribe(
        tarefa => {
          console.log("atualizou", tarefa);
          this.router.navigate(['/lista']);
        }
      );
      
    // }
  }

}
