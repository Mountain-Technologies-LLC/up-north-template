import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSocialAndContactEditComponent } from './main-social-and-contact-edit.component';

describe('MainSocialAndContactEditComponent', () => {
  let component: MainSocialAndContactEditComponent;
  let fixture: ComponentFixture<MainSocialAndContactEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSocialAndContactEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSocialAndContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
