import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MenuStateProviderService } from '../services/menu-state-service.service';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const SHARED_ITEMS = [
  TopBarComponent,
  FooterBarComponent,
  SideBarComponent
];

@NgModule({
  imports: [MaterialModule, CommonModule, RouterModule],
  declarations: SHARED_ITEMS,
  exports: SHARED_ITEMS,
  providers: [MenuStateProviderService]
})
export class SharedModule { }
