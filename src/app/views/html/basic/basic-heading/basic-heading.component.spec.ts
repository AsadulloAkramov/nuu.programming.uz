import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHeadingComponent } from './basic-heading.component';

describe('BasicHeadingComponent', () => {
  let component: BasicHeadingComponent;
  let fixture: ComponentFixture<BasicHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
