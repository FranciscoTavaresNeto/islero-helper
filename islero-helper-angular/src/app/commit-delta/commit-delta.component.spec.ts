import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitDeltaComponent } from './commit-delta.component';

describe('CommitDeltaComponent', () => {
  let component: CommitDeltaComponent;
  let fixture: ComponentFixture<CommitDeltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitDeltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
