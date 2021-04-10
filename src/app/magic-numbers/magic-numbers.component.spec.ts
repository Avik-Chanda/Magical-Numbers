import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicNumbersComponent } from './magic-numbers.component';

describe('MagicNumbersComponent', () => {
  let component: MagicNumbersComponent;
  let fixture: ComponentFixture<MagicNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
