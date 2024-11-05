import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToConnectComponent } from './request-to-connect.component';

describe('RequestToConnectComponent', () => {
  let component: RequestToConnectComponent;
  let fixture: ComponentFixture<RequestToConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestToConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestToConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
