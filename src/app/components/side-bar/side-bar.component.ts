import { Component, Input } from '@angular/core';
import { MenuStateProviderService } from 'src/app/services/menu-state-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() isExpanded: boolean = false;
  constructor(
    private menuStateProvider: MenuStateProviderService
  ) {
    this.menuStateProvider.menuState$.subscribe((state) => {
      this.isExpanded = state;
    });
  }
}
