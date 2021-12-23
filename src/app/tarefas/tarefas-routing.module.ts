import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { Routes } from '@angular/router';

export const TarefaRoutes: Routes = [
  {
  path: 'tarefas',
  redirectTo: 'tarefas/listar'
  },
  {
    path:'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path:'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },
  {
    path:'tarefas/editar/:id',
    component: EditarTarefaComponent
  }
];
