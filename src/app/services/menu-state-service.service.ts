import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuStateProviderService {
  public menuState = new BehaviorSubject<boolean>(false);
  readonly menuState$ = this.menuState.asObservable();
  constructor() { }
}
