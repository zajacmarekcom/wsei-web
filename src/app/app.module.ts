import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { UpdateTaskComponent } from './task/update-task/update-task.component';
import { FeatureListComponent } from './feature/feature-list/feature-list.component';
import { CreateFeatureComponent } from './feature/create-feature/create-feature.component';
import { FeatureDetailsComponent } from './feature/feature-details/feature-details.component';
import { UpdateFeatureComponent } from './feature/update-feature/update-feature.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { TaskListColumnComponent } from './task/task-list/task-list-column/task-list-column.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListComponent,
    LayoutComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    FeatureListComponent,
    CreateFeatureComponent,
    FeatureDetailsComponent,
    UpdateFeatureComponent,
    TaskDetailsComponent,
    TaskListColumnComponent,
    DashboardComponent,
  ],
  imports: [
    CdkDropListGroup,
    CdkDropList,
    NgFor,
    CdkDrag,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
