import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureListComponent } from './feature/feature-list/feature-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
      },
      {
        path: 'features',
        component: FeatureListComponent,
      },
      {
        path: 'tasks',
        component: TaskListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
