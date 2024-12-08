import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteTabComponent } from './website-tab.component';

describe('WebsiteTabComponent', () => {
  let component: WebsiteTabComponent;
  let fixture: ComponentFixture<WebsiteTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
