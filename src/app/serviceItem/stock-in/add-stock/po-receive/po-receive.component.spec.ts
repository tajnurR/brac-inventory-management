import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoReceiveComponent } from './po-receive.component';

describe('PoReceiveComponent', () => {
  let component: PoReceiveComponent;
  let fixture: ComponentFixture<PoReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoReceiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
