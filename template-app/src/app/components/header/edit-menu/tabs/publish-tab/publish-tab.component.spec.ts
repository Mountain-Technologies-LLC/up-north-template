import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTabComponent } from './publish-tab.component';

describe('PublishTabComponent', () => {
  let component: PublishTabComponent;
  let fixture: ComponentFixture<PublishTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
