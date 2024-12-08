import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainImageSectionComponent } from './main-image-section.component';

describe('MainImageSectionComponent', () => {
  let component: MainImageSectionComponent;
  let fixture: ComponentFixture<MainImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainImageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
