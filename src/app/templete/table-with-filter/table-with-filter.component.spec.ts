import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFilterComponent } from './table-with-filter.component';

describe('TableWithFilterComponent', () => {
  let component: TableWithFilterComponent;
  let fixture: ComponentFixture<TableWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
