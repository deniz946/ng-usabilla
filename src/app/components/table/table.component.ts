import { Rating } from './../../core/models/Rating';
import { Feed, FeedItem } from './../../core/models/Feed';
import { FeedService } from './../../core/services/feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usbl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public feedItems: FeedItem[] = [];
  public filteredItems: FeedItem[] = [];


  constructor(private _feedService: FeedService) { }

  ngOnInit() {
    this.getFeeds();
  }

  getDeviceLabel(item: FeedItem): string {
    if (this.isPhone(item.screen.width)) {
      return 'Mobile';
    } else if (this.isTablet(item.screen.width)) {
      return 'Tablet';
    } else {
      return 'Desktop';
    }
  }

  isPhone(width: number): boolean {
    return width >= 320 && width <= 480;
  }

  isTablet(width: number): boolean {
    return width >= 768 && width <= 1024;
  }

  isDesktop(width: number): boolean {
    return width >= 1200 && width <= 1600;
  }

  filterBySearch(value: string): void {
    if (value) {
      this.feedItems = this.filteredItems.filter(item => item.comment.includes(value));
    } else if(value.length === 0) {
      this.feedItems = this.filteredItems;
    }
  }

  filterByRating(ratings: Rating[]) {
    const selectedRatings = ratings.map(rating => rating.value).join(', ');
    this.feedItems = this.filteredItems.filter(feedItem => selectedRatings.includes(String(feedItem.rating)))
  }

  getCountryFlag(countryCode: string): string {
    return `http://www.countryflags.io/${countryCode}/flat/32.png`;
  }

  getMapUrl(lat: string, lng: string): string {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}
      &zoom=14&size=150x150&key=AIzaSyD9ycobB5RiavbXpJBo0Muz2komaqqvGv0&markers=${lat},${lng}&scale=2`;
  }

  private getFeeds(): void {
    this._feedService.getFeed()
      .subscribe(feeds => {
        console.log(feeds);
        // I just take the first 10 feeds for easy view and manipulation
        this.feedItems = feeds.items.splice(0, 10);
        this.filteredItems = this.feedItems;
      });
  }

}