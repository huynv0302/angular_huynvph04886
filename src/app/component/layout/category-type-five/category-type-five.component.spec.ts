import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeFiveComponent } from './category-type-five.component';

describe('CategoryTypeFiveComponent', () => {
  let component: CategoryTypeFiveComponent;
  let fixture: ComponentFixture<CategoryTypeFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
