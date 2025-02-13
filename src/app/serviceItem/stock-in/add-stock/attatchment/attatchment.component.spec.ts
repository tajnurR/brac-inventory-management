import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttatchmentComponent } from './attatchment.component';

describe('AttatchmentComponent', () => {
  let component: AttatchmentComponent;
  let fixture: ComponentFixture<AttatchmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttatchmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttatchmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
