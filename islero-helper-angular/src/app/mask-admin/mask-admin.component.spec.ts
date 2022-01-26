import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskAdminComponent } from './mask-admin.component';

describe('MaskAdminComponent', () => {
  let component: MaskAdminComponent;
  let fixture: ComponentFixture<MaskAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
