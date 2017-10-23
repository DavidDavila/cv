import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { StudiesComponent } from './studies/studies.component';
StudiesComponent

const routes: Routes = [
 	{ path: '', component: HomeComponent },
 	{ path: 'menu', component: MenuComponent },
 	{ path: 'workflow', component: WorkflowComponent },
 	{ path: 'studies', component: StudiesComponent },
 	{ path: ':company', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
