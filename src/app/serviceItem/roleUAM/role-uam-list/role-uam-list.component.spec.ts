import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleUAMListComponent } from './role-uam-list.component';

describe('RoleUAMListComponent', () => {
  let component: RoleUAMListComponent;
  let fixture: ComponentFixture<RoleUAMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleUAMListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleUAMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
