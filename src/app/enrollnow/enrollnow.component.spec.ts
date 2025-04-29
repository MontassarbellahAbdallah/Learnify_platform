import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollnowComponent } from './enrollnow.component';

describe('EnrollnowComponent', () => {
  let component: EnrollnowComponent;
  let fixture: ComponentFixture<EnrollnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollnowComponent]
    });
    fixture = TestBed.createComponent(EnrollnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
