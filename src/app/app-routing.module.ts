import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureListComponent } from './feature/feature-list/feature-list.component';
import { CreateFeatureComponent } from './feature/create-feature/create-feature.component';
import { FeatureDetailsComponent } from './feature/feature-details/feature-details.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { UpdateFeatureComponent } from './feature/update-feature/update-feature.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';

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
        path: 'feature/add',
        component: CreateFeatureComponent,
      },
      {
        path: 'feature/details/:id',
        component: FeatureDetailsComponent,
      },
      {
        path: 'feature/update/:id',
        component: UpdateFeatureComponent,
      },
      {
        path: 'tasks',
        component: TaskListComponent,
      },
      {
        path: 'task/details/:id',
        component: TaskDetailsComponent,
      },
      {
        path: 'task/add',
        component: CreateTaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
