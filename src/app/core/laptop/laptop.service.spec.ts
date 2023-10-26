/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LaptopService } from './laptop.service';

describe('Service: Laptop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaptopService]
    });
  });

  it('should ...', inject([LaptopService], (service: LaptopService) => {
    expect(service).toBeTruthy();
  }));
});
