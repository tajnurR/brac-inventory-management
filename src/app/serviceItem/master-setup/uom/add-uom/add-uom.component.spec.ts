import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUomComponent } from './add-uom.component';

describe('AddUomComponent', () => {
  let component: AddUomComponent;
  let fixture: ComponentFixture<AddUomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
