import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementExampleComponent } from './statement-example.component';

describe('StatementExampleComponent', () => {
  let component: StatementExampleComponent;
  let fixture: ComponentFixture<StatementExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
