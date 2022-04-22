import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAreaExampleComponent } from './free-area-example.component';

describe('FreeAreaExampleComponent', () => {
  let component: FreeAreaExampleComponent;
  let fixture: ComponentFixture<FreeAreaExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeAreaExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAreaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
