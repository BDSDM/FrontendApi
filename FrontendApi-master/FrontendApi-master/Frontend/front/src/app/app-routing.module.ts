import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ListAuthorComponent } from './list-author/list-author.component';

const routes: Routes = [
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'list-author', component: ListAuthorComponent },
  { path: 'edit-author/:id', component: EditAuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
