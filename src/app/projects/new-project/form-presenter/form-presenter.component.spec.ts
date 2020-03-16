import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPresenterComponent } from './form-presenter.component';

describe('FormPresenterComponent', () => {
  let component: FormPresenterComponent;
  let fixture: ComponentFixture<FormPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
