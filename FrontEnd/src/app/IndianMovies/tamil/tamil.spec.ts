import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tamil } from './tamil';

describe('Tamil', () => {
  let component: Tamil;
  let fixture: ComponentFixture<Tamil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tamil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tamil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
