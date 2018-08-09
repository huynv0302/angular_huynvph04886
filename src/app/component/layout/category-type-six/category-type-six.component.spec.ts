import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTypeSixComponent } from './category-type-six.component';

describe('CategoryTypeSixComponent', () => {
  let component: CategoryTypeSixComponent;
  let fixture: ComponentFixture<CategoryTypeSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTypeSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTypeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
