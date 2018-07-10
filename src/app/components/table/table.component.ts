import { Feed } from './../../core/models/Feed';
import { FeedService } from './../../core/services/feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usbl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public feedItems: Feed[] = [];

  constructor(private _feedService: FeedService) { }

  ngOnInit() {
    this._feedService.getFeed()
    .subscribe(feeds => {
      feeds = feeds.splice(0, 10)
      console.log(feeds);
      // I just take the first 10 feeds for easy view and manipulation
      this.feedItems = feeds.splice(0, 10);
    });
  }

}
