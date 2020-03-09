import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleToggleComponent } from './visible-toggle.component';

describe('VisibleToggleComponent', () => {
  let component: VisibleToggleComponent;
  let fixture: ComponentFixture<VisibleToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibleToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
