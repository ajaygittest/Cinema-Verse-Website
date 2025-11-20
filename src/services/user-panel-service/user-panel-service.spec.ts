import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelService } from './user-panel-service';

describe('UserPanelService', () => {
  let component: UserPanelService;
  let fixture: ComponentFixture<UserPanelService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPanelService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPanelService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
