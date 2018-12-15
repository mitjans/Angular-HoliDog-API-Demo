import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFetchComponent } from './random-fetch.component';

describe('RandomFetchComponent', () => {
  let component: RandomFetchComponent;
  let fixture: ComponentFixture<RandomFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
