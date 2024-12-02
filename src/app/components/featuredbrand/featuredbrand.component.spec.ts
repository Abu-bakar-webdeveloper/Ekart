import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedbrandComponent } from './featuredbrand.component';

describe('FeaturedbrandComponent', () => {
  let component: FeaturedbrandComponent;
  let fixture: ComponentFixture<FeaturedbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedbrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
