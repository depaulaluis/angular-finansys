import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent} from './category-list/category-list.component';
import { CategoryFormComponent} from './category-form/category-form.component';



const routes: Routes = [
  { path: '', component: CategoryListComponent},
  { path: 'new', component: CategoryFormComponent},
  { path: ':id/edit', component: CategoryFormComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

/*
Ele ja carrega o Categories, por isso ''
nas rotas esta acessando o ID da rota

nomesite.com/categories/new => entra no form
nomesite.com/categories/:id/edit => edita o form

*/
