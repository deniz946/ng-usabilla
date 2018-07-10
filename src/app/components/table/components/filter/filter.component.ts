import { Rating } from './../../../../core/models/Rating';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { debounceTime, map, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'usbl-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  public searchValue: Subject<string> = new Subject();
  public searchValue$: Observable<string> = this.searchValue
    .asObservable()
    .pipe(distinctUntilChanged())
    .pipe(debounceTime(150));

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter();

  @Output()
  onChangeRating: EventEmitter<Rating[]> = new EventEmitter();

  public ratingFilter: Rating[] = [
    {selected: true, value: 1},
    {selected: true, value: 2},
    {selected: true, value: 3},
    {selected: true, value: 4},
    {selected: true, value: 5},
  ]

  constructor(private changeDetector: ChangeDetectorRef) { 
    this.searchValue$.subscribe((value: string) => {
      this.onSearch.emit(value);
      this.changeDetector.markForCheck();
      console.log(value);
    });
  }

  ngOnInit() {
  }

  searchQuery(query: string) {
    this.searchValue.next(query);
  }

  toggleRating(currRating: Rating): void {
    const filter = this.ratingFilter.find(rating => rating.value === currRating.value);
    filter.selected = !currRating.selected;
    this.emitRatingChange();
  }

  private emitRatingChange(): void {
    const ratings = this.ratingFilter.filter(rating => rating.selected)
    this.onChangeRating.emit(ratings);
  }

  

}
