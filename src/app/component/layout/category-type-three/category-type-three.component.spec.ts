import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeThreeComponent } from './category-type-three.component';

describe('CategoryTypeThreeComponent', () => {
  let component: CategoryTypeThreeComponent;
  let fixture: ComponentFixture<CategoryTypeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
