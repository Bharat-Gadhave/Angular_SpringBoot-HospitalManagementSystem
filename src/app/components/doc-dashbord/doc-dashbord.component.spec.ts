import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDashbordComponent } from './doc-dashbord.component';

describe('DocDashbordComponent', () => {
  let component: DocDashbordComponent;
  let fixture: ComponentFixture<DocDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocDashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
