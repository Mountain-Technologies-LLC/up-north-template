import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeroWithFacebookAndContactComponent } from './section-hero-with-facebook-and-contact.component';

describe('SectionHeroWithFacebookAndContactComponent', () => {
  let component: SectionHeroWithFacebookAndContactComponent;
  let fixture: ComponentFixture<SectionHeroWithFacebookAndContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeroWithFacebookAndContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHeroWithFacebookAndContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
