import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { MenuStateProviderService } from './services/menu-state-service.service';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { TodoService } from './services/to-do.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletedRecordsComponent } from './deleted-records/deleted-records.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeletedRecordsComponent,
    ToDoAddComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    MenuStateProviderService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
