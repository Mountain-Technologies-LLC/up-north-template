import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCenteredSectionComponent } from './main-centered-section.component';

describe('MainCenteredSectionComponent', () => {
  let component: MainCenteredSectionComponent;
  let fixture: ComponentFixture<MainCenteredSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCenteredSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCenteredSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
