import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePoppupComponent } from './delete-poppup.component';

describe('DeletePoppupComponent', () => {
  let component: DeletePoppupComponent;
  let fixture: ComponentFixture<DeletePoppupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePoppupComponent]
    });
    fixture = TestBed.createComponent(DeletePoppupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
