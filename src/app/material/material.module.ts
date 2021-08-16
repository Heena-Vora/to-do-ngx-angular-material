import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule { }
