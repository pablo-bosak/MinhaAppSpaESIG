import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './navegacao/home/home.component';
import { DetalhesComponent } from './tarefa/detalhes/detalhes.component';
import { EditarComponent } from './tarefa/editar/editar.component';
import { ExcluirComponent } from './tarefa/excluir/excluir.component';
import { ListaComponent } from './tarefa/lista/lista.component';
import { NovaComponent } from './tarefa/nova/nova.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'nova', component: NovaComponent },
    { path: 'lista', component: ListaComponent },
    { path: 'detalhes/:id', component: DetalhesComponent },
    { path: 'excluir/:id', component: ExcluirComponent },
    { path: 'editar/:id', component: EditarComponent }
];