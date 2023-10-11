import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdMgmtComponent } from './admin-prod-mgmt.component';

describe('AdminProdMgmtComponent', () => {
  let component: AdminProdMgmtComponent;
  let fixture: ComponentFixture<AdminProdMgmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProdMgmtComponent]
    });
    fixture = TestBed.createComponent(AdminProdMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
