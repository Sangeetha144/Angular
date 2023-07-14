import { TestBed } from '@angular/core/testing';

import { StoreAsJsonService } from './store-as-json.service';

describe('StoreAsJsonService', () => {
  let service: StoreAsJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreAsJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
