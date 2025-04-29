import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousesListComponent } from './couses-list.component';

describe('CousesListComponent', () => {
  let component: CousesListComponent;
  let fixture: ComponentFixture<CousesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CousesListComponent]
    });
    fixture = TestBed.createComponent(CousesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
