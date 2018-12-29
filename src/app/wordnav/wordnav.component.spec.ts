import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordnavComponent } from './wordnav.component';

describe('WordnavComponent', () => {
  let component: WordnavComponent;
  let fixture: ComponentFixture<WordnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
