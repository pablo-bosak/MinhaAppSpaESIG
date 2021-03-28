import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Prioridade, Responsavel, Situacao, Tarefa } from '../tarefa/tarefa';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class TarefaService  {
  
  tarefa: Tarefa = new Tarefa();
  apiUrl: string = 'api/tarefas';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl)
      .subscribe(tarefas => {
        console.log(tarefas)
      });
  }

  getAllResponsaveis() {
    return this.http
      .get<Responsavel[]>('api/responsaveis');
  }

  getAllSituacoes() {
    return this.http
      .get<Situacao[]>('api/situacoes');
  }

  getAllPrioridades() {
    return this.http
      .get<Prioridade[]>('api/prioridades');
  }

  obterTarefas() : Observable<Tarefa[]> {
    return this.http
      .get<Tarefa[]>(this.apiUrl);
  }

  obterPorId(id: string): Observable<Tarefa> {
    return this.http
      .get<Tarefa>(this.apiUrl + '/' + id);
  }

  cadastrarTarefa (tarefa: Tarefa): Observable<Tarefa> {    
    return this.http
      .post<Tarefa>(this.apiUrl, tarefa, cudOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletarTarefa (id: string): Observable<Tarefa> {
    return this.http.delete<Tarefa>(this.apiUrl + '/' + id, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  atualizarTarefa(tarefa: Tarefa): Observable<null | Tarefa> {
    return this.http.put<Tarefa>(this.apiUrl, tarefa, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllTarefas(): Observable<Tarefa[]> {

    const options = { params: new HttpParams().set('situacao', 'Em andamento') };

    return this.http.get<Tarefa[]>(this.apiUrl, options).pipe(
      catchError(this.handleError)
    );

  }

  pesquisarTarefas(tarefa: Tarefa): Observable<Tarefa[]> {
    
    let params = new HttpParams();

    if(tarefa.id != ""){
      params = params.set('id', tarefa.id);
    }  

    if(tarefa.titulo != ""){
      params = params.set('titulo', tarefa.titulo);
    }  

    if(tarefa.responsavel != "" && tarefa.responsavel != "Selecione"){
      params = params.set('responsavel', tarefa.responsavel);
    }  

    if(tarefa.situacao != "" && tarefa.situacao != "Selecione"){
      params = params.set('situacao', tarefa.situacao);
    }  

    const options = { params: params };

    return this.http.get<Tarefa[]>(this.apiUrl, options).pipe(
      catchError(this.handleError)
    );

  }



  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }


}
