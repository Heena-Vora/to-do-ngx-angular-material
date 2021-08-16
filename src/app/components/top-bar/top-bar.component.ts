import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuStateProviderService } from 'src/app/services/menu-state-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() title: string = '';
  expand: boolean = false;
  constructor(
    private menuStateProvider: MenuStateProviderService
  ) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.expand = !this.expand;
    this.menuStateProvider.menuState.next(this.expand);
  }
}
