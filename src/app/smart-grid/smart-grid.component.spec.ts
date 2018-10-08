import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGridComponent } from './smart-grid.component';

describe('SmartGridComponent', () => {
  let component: SmartGridComponent;
  let fixture: ComponentFixture<SmartGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
