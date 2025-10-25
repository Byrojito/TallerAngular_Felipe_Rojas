import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListComponente } from './series-list';

describe('SeriesList', () => {
  let component: SeriesListComponente;
  let fixture: ComponentFixture<SeriesListComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesListComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesListComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
