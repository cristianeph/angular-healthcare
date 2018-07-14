
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareListComponent } from './care-list.component';

describe('CareListComponent', () => {
  let component: CareListComponent;
  let fixture: ComponentFixture<CareListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CareListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
