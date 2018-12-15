import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedFetchComponent } from './breed-fetch.component';

describe('BreedFetchComponent', () => {
  let component: BreedFetchComponent;
  let fixture: ComponentFixture<BreedFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
