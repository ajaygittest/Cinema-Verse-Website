import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Malayalam } from './malayalam';

describe('Malayalam', () => {
  let component: Malayalam;
  let fixture: ComponentFixture<Malayalam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Malayalam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Malayalam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
