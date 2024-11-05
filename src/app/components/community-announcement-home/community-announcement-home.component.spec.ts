import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityAnnouncementHomeComponent } from './community-announcement-home.component';

describe('CommunityAnnouncementHomeComponent', () => {
  let component: CommunityAnnouncementHomeComponent;
  let fixture: ComponentFixture<CommunityAnnouncementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityAnnouncementHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityAnnouncementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
