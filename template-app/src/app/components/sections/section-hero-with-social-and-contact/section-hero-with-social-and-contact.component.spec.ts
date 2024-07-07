import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeroWithSocialAndContactComponent } from './section-hero-with-social-and-contact.component';

describe('SectionHeroWithSocialAndContactComponent', () => {
  let component: SectionHeroWithSocialAndContactComponent;
  let fixture: ComponentFixture<SectionHeroWithSocialAndContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeroWithSocialAndContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHeroWithSocialAndContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
