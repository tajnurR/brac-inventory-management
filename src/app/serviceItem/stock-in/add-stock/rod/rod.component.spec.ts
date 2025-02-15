import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodComponent } from './rod.component';

describe('RodComponent', () => {
  let component: RodComponent;
  let fixture: ComponentFixture<RodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
