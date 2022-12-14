import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptListComponent } from './deptlist.component';

describe('DeptlistComponent', () => {
  let component: DeptListComponent;
  let fixture: ComponentFixture<DeptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptListComponent ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(DeptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
