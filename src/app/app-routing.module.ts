import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './components/database/database.component';
import { KanbanComponent } from './components/kanban/kanban.component';

const routes: Routes = [
  {path: 'database', component: DatabaseComponent},
  {path: '', component: KanbanComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
