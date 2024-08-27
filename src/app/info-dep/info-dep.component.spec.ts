import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDepComponent } from './info-dep.component';

describe('InfoDepComponent', () => {
  let component: InfoDepComponent;
  let fixture: ComponentFixture<InfoDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
