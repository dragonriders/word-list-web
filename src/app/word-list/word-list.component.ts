import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from './../services/http.service';
import { APP_URLS } from './../constants/urls.endpoints';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../../config';
import { WordListItemDirective } from './word-list-item.directive';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent implements OnInit {

  wordlistsha: string;
  wordlist: Observable<any>[];
  currentWordIndex: number;
  wordlistname: string;
  modes: string[] = ['practice', 'learn'];
  selectedModeIndex: number;

  constructor(private route: ActivatedRoute, private http: HttpService) {
    this.selectedModeIndex = -1;
  }

  ngOnInit() {
    this.currentWordIndex = 0;
    this.route.params.subscribe(params => {
      this.wordlistsha = params.id;
      if (this.wordlistsha === '9a304cf0cb4d63718bbf989346ae9b9adf37defa') {
        this.http.get(APP_URLS.MLAB_DB_URL, { apiKey: APP_CONSTANTS.MLAB_KEY }).subscribe((wordlist: any[]) => {
          this.wordlist = wordlist;
        }, (error) => {

        });
      } else {
        this.http.get(APP_URLS.MARKETPLACE_URL).subscribe((list: any[]) => {
          const index = list.findIndex(l => l.sha === this.wordlistsha);
          this.wordlistname = list[index].name;
          this.http.get(list[index].download_url).subscribe((wordlist: any[]) => {
            this.wordlist = wordlist;

          }, (error) => {

          });
        }, (error) => {

        });
      }
    });
  }

  activeWord(word, index) {
    this.currentWordIndex = index;
  }

  wordNext() {
    if (this.wordlist.length > this.currentWordIndex + 1) {
      this.currentWordIndex = this.currentWordIndex + 1;
    }
  }

  wordPrev() {
    if (this.currentWordIndex - 1 >= 0) {
      this.currentWordIndex = this.currentWordIndex - 1;
    }
  }

  selectMode(index: number) {
    this.selectedModeIndex = index;
  }

  sentenceSplitter() {
    return this.wordlist[this.currentWordIndex]['information'].split('\n\n');
  }

  mnemonicSplitter() {
    return this.wordlist[this.currentWordIndex]['mnemonic'].split(/\d\./).slice(1);
  }
}
