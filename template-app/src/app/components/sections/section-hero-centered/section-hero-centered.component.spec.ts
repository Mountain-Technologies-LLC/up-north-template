import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeroCenteredComponent } from './section-hero-centered.component';

describe('SectionHeroCenteredComponent', () => {
  let component: SectionHeroCenteredComponent;
  let fixture: ComponentFixture<SectionHeroCenteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeroCenteredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHeroCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
