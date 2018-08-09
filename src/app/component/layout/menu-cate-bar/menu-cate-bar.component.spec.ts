import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCateBarComponent } from './menu-cate-bar.component';

describe('MenuCateBarComponent', () => {
  let component: MenuCateBarComponent;
  let fixture: ComponentFixture<MenuCateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
