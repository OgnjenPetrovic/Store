import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayersComponent } from './bayers.component';

describe('BayersComponent', () => {
  let component: BayersComponent;
  let fixture: ComponentFixture<BayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
