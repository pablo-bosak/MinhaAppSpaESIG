import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/servicos/tarefa.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {

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

  concluir(){
    
    this.tarefa.situacao = 'Concluído';

    this.tarefaService.atualizarTarefa(this.tarefa)
    .subscribe(
      tarefa => {
        console.log("atualizou", tarefa);
        this.router.navigate(['/lista']);
      }
    );

  }

}
