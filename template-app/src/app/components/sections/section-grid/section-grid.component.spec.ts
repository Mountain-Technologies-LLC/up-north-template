import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGridComponent } from './section-grid.component';

describe('SectionGridComponent', () => {
  let component: SectionGridComponent;
  let fixture: ComponentFixture<SectionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
