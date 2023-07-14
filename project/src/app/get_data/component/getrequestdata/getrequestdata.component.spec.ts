import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrequestdataComponent } from './getrequestdata.component';

describe('GetrequestdataComponent', () => {
  let component: GetrequestdataComponent;
  let fixture: ComponentFixture<GetrequestdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrequestdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetrequestdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
