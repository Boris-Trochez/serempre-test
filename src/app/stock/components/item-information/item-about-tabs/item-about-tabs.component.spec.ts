import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAboutTabsComponent } from './item-about-tabs.component';

describe('ItemAboutTabsComponent', () => {
  let component: ItemAboutTabsComponent;
  let fixture: ComponentFixture<ItemAboutTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAboutTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAboutTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
