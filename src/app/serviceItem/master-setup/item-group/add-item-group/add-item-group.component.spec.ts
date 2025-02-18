import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemGroupComponent } from './add-item-group.component';

describe('AddItemGroupComponent', () => {
  let component: AddItemGroupComponent;
  let fixture: ComponentFixture<AddItemGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
