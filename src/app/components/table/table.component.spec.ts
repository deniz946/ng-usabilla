import { FilterComponent } from './components/filter/filter.component';
import { FeedItem } from './../../core/models/Feed';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedService } from '../../core/services/feed.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  // let items: FeedItem[] = [
  //   {}
  // ]
  beforeAll(() => {

  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent, FilterComponent ],
      imports: [FormsModule, HttpClientModule],
      providers: [FeedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
