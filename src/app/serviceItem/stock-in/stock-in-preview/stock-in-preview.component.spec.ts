import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInPreviewComponent } from './stock-in-preview.component';

describe('StockInPreviewComponent', () => {
  let component: StockInPreviewComponent;
  let fixture: ComponentFixture<StockInPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockInPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockInPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
