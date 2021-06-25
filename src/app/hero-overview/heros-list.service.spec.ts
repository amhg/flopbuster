import { TestBed } from '@angular/core/testing';

import { HerosListService } from './heros-list.service';

describe('HerosListService', () => {
  let service: HerosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
