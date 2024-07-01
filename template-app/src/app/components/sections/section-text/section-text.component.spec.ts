import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTextComponent } from './section-text.component';

describe('SectionTextComponent', () => {
  let component: SectionTextComponent;
  let fixture: ComponentFixture<SectionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
