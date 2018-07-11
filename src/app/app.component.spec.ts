import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FeedService } from './core/services/feed.service';
import { FilterComponent } from './components/table/components/filter/filter.component';
import { TableComponent } from './components/table/table.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TableComponent,
        FilterComponent
      ],
      imports: [FormsModule, HttpClientModule],
      providers: [FeedService]
    }).compileComponents();
  }));
  it('should create the app component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Dashboard'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Dashboard');
  }));

});
