import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeTwoComponent } from './category-type-two.component';

describe('CategoryTypeTwoComponent', () => {
  let component: CategoryTypeTwoComponent;
  let fixture: ComponentFixture<CategoryTypeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
