import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnsubscribeComponent } from './no-unsubscribe.component';

describe('NoUnsubscribeComponent', () => {
  let component: NoUnsubscribeComponent;
  let fixture: ComponentFixture<NoUnsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoUnsubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
