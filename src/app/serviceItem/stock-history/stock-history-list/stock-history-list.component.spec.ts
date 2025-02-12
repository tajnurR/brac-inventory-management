import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHistoryListComponent } from './stock-history-list.component';

describe('StockHistoryListComponent', () => {
  let component: StockHistoryListComponent;
  let fixture: ComponentFixture<StockHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockHistoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
