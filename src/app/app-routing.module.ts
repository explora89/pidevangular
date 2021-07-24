import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCreateComponent } from './components/request-create/request-create.component';
import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { RequestUpdateComponent } from './components/request-update/request-update.component';

const routes: Routes = [
  { path: 'request/list', component: RequestListComponent },
  { path: 'client/:id/request/list', component: RequestListComponent },
  { path: 'request/edit/:id', component: RequestUpdateComponent },
  { path: 'request/detail/:id', component: RequestDetailComponent },
  { path: 'request/create', component: RequestCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
