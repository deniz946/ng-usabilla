import { FilterObject } from './../../../../core/models/FilterObject';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedService } from '../../../../core/services/feed.service';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [FormsModule, HttpClientModule],
      providers: [FeedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('#filters'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create the filters component', () => {
    expect(component).toBeTruthy();
  });

  it('should create filters div containing the input and rating selector', () => {
    expect(el).toBeTruthy();
  });

  it('should update the value of searchInput', () => {
    const input = fixture.debugElement.query(By.css('.filter-input'));
    const element = input.nativeElement;
    element.value = 'belle';
    element.dispatchEvent(new Event('input'));
    expect(component.searchInput).toBe('belle');
  });

  it('should fire the input ngOnChange emitting value', () => {
    spyOn(component, 'searchQuery');
    const input = fixture.debugElement.query(By.css('.filter-input'));
    const element = input.nativeElement;
    element.value = 'camel';
    element.dispatchEvent(new Event('input'));
    expect(component.searchQuery).toHaveBeenCalledTimes(1);
  });

  it('should create the rating selectors', () => {
    const elementsAll = fixture.debugElement.queryAll(By.css('.rating>span'));
    expect(elementsAll.length).toBe(5);
  });

  it('should disable clicked rating (function call test)', () => {
    spyOn(component, 'toggleRating');
    const elementsAll = fixture.debugElement.queryAll(By.css('.rating'));
    const element = elementsAll[0].nativeElement;
    element.click();
    expect(component.toggleRating).toHaveBeenCalledTimes(1);
  });

  it('should disable rating on click (array of selected items)', () => {
    const elementsAll = fixture.debugElement.queryAll(By.css('.rating'));
    const element = elementsAll[0].nativeElement;
    element.click();
    const selected = component.ratingFilter.filter(item => item.selected);
    fixture.detectChanges();
    expect(selected.length).toBe(4);
  });

  it('output emits with search query', async() => {
    spyOn(component, 'searchQuery');
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('.filter-input'));
    const element = input.nativeElement;
    element.value = 'alicante';
    element.dispatchEvent(new Event('input'));
    component.filterChanged.subscribe((filter: FilterObject) => {
      expect(filter.search).toBe('alicante');
      expect(filter.rating.length).toBe(5);
      expect(component.searchQuery).toHaveBeenCalledTimes(1);
    });
  });


});
