import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/servicos/tarefa.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html'
})
export class ExcluirComponent implements OnInit {

  tarefa: Tarefa;
  id: string;

  constructor(
    private tarefaService: TarefaService, 
    private router: Router,
    private route: ActivatedRoute
    ) { 

    this.id = this.route.snapshot.params['id'];    
    this.tarefaService.obterPorId(this.id)
     .subscribe(
        tarefa => {
          this.tarefa = tarefa;
        },
        error => console.log(error)
      );  
  }

  ngOnInit(): void {
  }

  deletar(){
    this.tarefaService.deletarTarefa(this.id)
    .subscribe(
      tarefa => {
        this.router.navigate(['/lista']);
      }
    );
  }

}
