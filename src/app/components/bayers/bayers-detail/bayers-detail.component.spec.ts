import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayersDetailComponent } from './bayers-detail.component';

describe('BayersDetailComponent', () => {
  let component: BayersDetailComponent;
  let fixture: ComponentFixture<BayersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
