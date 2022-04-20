import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroExampleComponent } from './intro-example.component';

describe('IntroExampleComponent', () => {
  let component: IntroExampleComponent;
  let fixture: ComponentFixture<IntroExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
