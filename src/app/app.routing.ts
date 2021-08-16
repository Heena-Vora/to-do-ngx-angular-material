import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { DeletedRecordsComponent } from './deleted-records/deleted-records.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'trash',
    component: DeletedRecordsComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RoutingModule {}
