import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabComponent } from './grab.component';

describe('GrabComponent', () => {
  let component: GrabComponent;
  let fixture: ComponentFixture<GrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
