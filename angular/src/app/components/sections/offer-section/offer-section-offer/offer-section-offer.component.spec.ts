import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSectionOfferComponent } from './offer-section-offer.component';

describe('OfferSectionOfferComponent', () => {
  let component: OfferSectionOfferComponent;
  let fixture: ComponentFixture<OfferSectionOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferSectionOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferSectionOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
