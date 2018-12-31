import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpService } from './../services/http.service';
import { APP_URLS } from './../constants/urls.endpoints';
import { log } from 'util';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {

  searchQuery: string;
  searchQueryChecker: Subject<string> = new Subject<string>();
  searchResults: Object[];
  selectedTab: Object;
  selectedFilterTab: Object[] = [
    { type: 'Similar', selected: false, query: 'ml' },
    { type: 'Antonyms', selected: false, query: 'rel_ant' },
    { type: 'Describe', selected: false, query: 'rel_jjb' },
    { type: 'Adjective', selected: false, query: 'rel_jja' },
    { type: 'Trigger', selected: false, query: 'rel_trg' },
    { type: 'Rhyming', selected: false, query: 'rel_rhy' }];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.selectedTab = this.selectedFilterTab[0];
    this.selectedFilterTab[0]['selected'] = true;
    this.searchQueryChecker
      .pipe(
        debounceTime(600)
        // distinctUntilChanged()
      )
      .subscribe(search => {
        const query = this.selectedTab['query'];
        this.http.get(APP_URLS.RELATED_URL, { [query]: search }).subscribe((results: Object[]) => {
          this.searchResults = results;
        });
      }, (error) => {

      });
  }


  queryChanged(search: string) {
    this.searchQueryChecker.next(search);
  }

  selectTab(tab) {
    const index = this.selectedFilterTab.findIndex((val: any) => val.type === tab.type);
    if (index !== -1) {
      this.selectedFilterTab[index]['selected'] = true;
      this.selectedTab = this.selectedFilterTab[index];
      this.queryChanged(this.searchQuery);
      this.selectedFilterTab.forEach((val, i) => {
        if (i !== index) {
          this.selectedFilterTab[i]['selected'] = false;
        }
      });
    }
  }
}
