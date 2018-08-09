import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeOneComponent } from './category-type-one.component';

describe('CategoryTypeOneComponent', () => {
  let component: CategoryTypeOneComponent;
  let fixture: ComponentFixture<CategoryTypeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
