import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupListComponent } from './item-group-list.component';

describe('ItemGroupListComponent', () => {
  let component: ItemGroupListComponent;
  let fixture: ComponentFixture<ItemGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGroupListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
