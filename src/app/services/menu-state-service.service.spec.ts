import { TestBed } from '@angular/core/testing';

import { MenuStateProviderService } from './menu-state-service.service';

describe('MenuStateProviderService', () => {
  let service: MenuStateProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuStateProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
