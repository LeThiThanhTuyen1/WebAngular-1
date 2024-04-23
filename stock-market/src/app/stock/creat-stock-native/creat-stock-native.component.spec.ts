import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatStockNativeComponent } from './creat-stock-native.component';

describe('CreatStockNativeComponent', () => {
  let component: CreatStockNativeComponent;
  let fixture: ComponentFixture<CreatStockNativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatStockNativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatStockNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
