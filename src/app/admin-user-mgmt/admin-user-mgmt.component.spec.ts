import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserMgmtComponent } from './admin-user-mgmt.component';

describe('AdminUserMgmtComponent', () => {
  let component: AdminUserMgmtComponent;
  let fixture: ComponentFixture<AdminUserMgmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserMgmtComponent]
    });
    fixture = TestBed.createComponent(AdminUserMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
