import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TorusComponent } from './components/torus/torus.component';
import { ListComponent } from './list/list.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  // {path: 'torus', component:TorusComponent}
  {path: "studentlist", component:StudentlistComponent},
  {path: "list/:id", component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
