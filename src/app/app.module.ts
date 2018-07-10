import { FeedService } from './core/services/feed.service';
import { FilterComponent } from './components/table/components/filter/filter.component';
import { TableComponent } from './components/table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
