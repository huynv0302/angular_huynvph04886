import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCategoriesComponent } from './theme-categories.component';

describe('ThemeCategoriesComponent', () => {
  let component: ThemeCategoriesComponent;
  let fixture: ComponentFixture<ThemeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
