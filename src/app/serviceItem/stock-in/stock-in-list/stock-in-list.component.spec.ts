import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInListComponent } from './stock-in-list.component';

describe('StockInListComponent', () => {
  let component: StockInListComponent;
  let fixture: ComponentFixture<StockInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockInListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
