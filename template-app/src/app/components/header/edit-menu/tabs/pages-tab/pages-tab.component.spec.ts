import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTabComponent } from './pages-tab.component';

describe('PagesTabComponent', () => {
  let component: PagesTabComponent;
  let fixture: ComponentFixture<PagesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
