import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeFourComponent } from './category-type-four.component';

describe('CategoryTypeFourComponent', () => {
  let component: CategoryTypeFourComponent;
  let fixture: ComponentFixture<CategoryTypeFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
