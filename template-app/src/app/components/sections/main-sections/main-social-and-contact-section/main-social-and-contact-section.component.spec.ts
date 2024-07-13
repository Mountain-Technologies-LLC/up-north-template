import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSocialAndContactSectionComponent } from './main-social-and-contact-section.component';

describe('MainSocialAndContactSection', () => {
  let component: MainSocialAndContactSectionComponent;
  let fixture: ComponentFixture<MainSocialAndContactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSocialAndContactSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSocialAndContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
