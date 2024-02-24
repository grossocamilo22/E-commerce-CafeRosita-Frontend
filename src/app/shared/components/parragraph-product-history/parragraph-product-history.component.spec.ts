import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParragraphHistoryComponent } from './parragraph-product-history.component';

describe('ParragraphHistoryComponent', () => {
  let component: ParragraphHistoryComponent;
  let fixture: ComponentFixture<ParragraphHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParragraphHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParragraphHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
