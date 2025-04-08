import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioTemplateComponent } from './protfolio-template.component';

describe('ProtfolioTemplateComponent', () => {
  let component: ProtfolioTemplateComponent;
  let fixture: ComponentFixture<ProtfolioTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtfolioTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtfolioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
