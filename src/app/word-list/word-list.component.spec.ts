import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListComponent } from './word-list.component';

describe('WordListComponent', () => {
  let component: WordListComponent;
  let fixture: ComponentFixture<WordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
