import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRightTypeOneComponent } from './category-right-type-one.component';

describe('CategoryRightTypeOneComponent', () => {
  let component: CategoryRightTypeOneComponent;
  let fixture: ComponentFixture<CategoryRightTypeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRightTypeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRightTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
