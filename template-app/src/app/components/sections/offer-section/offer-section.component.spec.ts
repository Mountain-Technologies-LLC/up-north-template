import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOfferComponent } from './offer-section.component';

describe('SectionOfferComponent', () => {
  let component: SectionOfferComponent;
  let fixture: ComponentFixture<SectionOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
