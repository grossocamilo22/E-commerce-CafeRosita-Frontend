import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPagesComponent } from './shop-pages.component';

describe('ShopPagesComponent', () => {
  let component: ShopPagesComponent;
  let fixture: ComponentFixture<ShopPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
