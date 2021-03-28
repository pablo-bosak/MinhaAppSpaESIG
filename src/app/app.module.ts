import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { rootRouterConfig } from './app.routes';

import { DetalhesComponent } from './tarefa/detalhes/detalhes.component';
import { EditarComponent } from './tarefa/editar/editar.component';
import { ExcluirComponent } from './tarefa/excluir/excluir.component';
import { ListaComponent } from './tarefa/lista/lista.component';
import { NovaComponent } from './tarefa/nova/nova.component';


import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { MyInMemoryService } from './servicos/my-in-memory.service'
import { TarefaService } from './servicos/tarefa.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    DetalhesComponent,
    EditarComponent,
    ExcluirComponent,
    ListaComponent,
    NovaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MyInMemoryService),    
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})],
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    TarefaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
