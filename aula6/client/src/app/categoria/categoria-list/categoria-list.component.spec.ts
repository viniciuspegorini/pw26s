import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroListComponent } from './categoria-list.component';

describe('GeneroListComponent', () => {
  let component: GeneroListComponent;
  let fixture: ComponentFixture<GeneroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
