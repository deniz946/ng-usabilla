import { Rating } from './../../../../core/models/Rating';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { debounceTime, map, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FilterObject } from '../../../../core/models/filterObject';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  public searchValue: BehaviorSubject<string> = new BehaviorSubject('');
  public searchValue$: Observable<string> = this.searchValue
    .asObservable()
    .pipe(distinctUntilChanged())
    .pipe(debounceTime(500));

  @Output()
  filterChanged: EventEmitter<FilterObject> = new EventEmitter();

  public searchInput = '';
  public ratingFilter: Rating[] = [
    {selected: true, value: 1},
    {selected: true, value: 2},
    {selected: true, value: 3},
    {selected: true, value: 4},
    {selected: true, value: 5},
  ];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.searchValue$.subscribe((value: string) => {
      this.changeDetector.markForCheck();
      this.emitChanges();
    });
  }

  searchQuery(query: string) {
    this.searchValue.next(query);
  }

  toggleRating(currRating: Rating): void {
    const filter = this.ratingFilter.find(rating => rating.value === currRating.value);
    filter.selected = !currRating.selected;
    this.emitChanges();
  }

  private emitChanges(): void {
    this.filterChanged.emit({
      search: this.searchInput,
      rating: this.ratingFilter.filter(rating => rating.selected)
    });
  }



}
