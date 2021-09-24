import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPurchaseOptionsComponent } from './set-purchase-options.component';

describe('SetPurchaseOptionsComponent', () => {
  let component: SetPurchaseOptionsComponent;
  let fixture: ComponentFixture<SetPurchaseOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPurchaseOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPurchaseOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
