import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from './../services/http.service';
import { WordService } from './../services/word.service';
import { APP_URLS } from './../constants/urls.endpoints';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../../config';
import { Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, debounceTime, combineAll, map } from 'rxjs/operators';

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
  infomode: number;
  @ViewChild('wlist') wordlistElement: ElementRef<any>;
  wordImage: Subject<string> = new Subject<string>();

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router,
    private word: WordService) {
    this.selectedModeIndex = -1;
    this.infomode = 0;
  }

  ngOnInit() {
    this.currentWordIndex = 0;
    this.route.params.subscribe(params => {
      this.wordlistsha = params.id;
      if (this.wordlistsha === '9a304cf0cb4d63718bbf989346ae9b9adf37defa') {
        this.word.mlabList().subscribe((wordlist: any[]) => {
          this.wordlist = wordlist;
          this.wordlistname = 'Default List';
        }, (error) => {

        });
      } else {
        const list = this.word.marketlist;
        const index = list.findIndex(l => l.sha === this.wordlistsha);
        this.wordlistname = list[index].name;
        this.word.wordlist(this.wordlistsha).subscribe((wordlist: any[]) => {
          this.wordlist = wordlist;

        }, (error) => {

        });
      }
    });
    this.wordImage.pipe(debounceTime(300), distinctUntilChanged(), map(val => (val))
    ).subscribe(val => {
      this.fetchImage(val);
    });
  }

  activeWord(word, index) {
    this.currentWordIndex = index;
    this.wordImage.next(this.wordlist[this.currentWordIndex]['name']);
  }

  wordNext() {
    if (this.wordlist.length > this.currentWordIndex + 1) {
      this.currentWordIndex = this.currentWordIndex + 1;
      console.log(this.wordlistElement.nativeElement.scrollTop);
      this.wordlistElement.nativeElement.scrollTop += 48;
      this.wordImage.next(this.wordlist[this.currentWordIndex]['name']);

    }
  }

  wordPrev() {
    if (this.currentWordIndex - 1 >= 0) {
      this.currentWordIndex = this.currentWordIndex - 1;
      console.log(this.wordlistElement.nativeElement.scrollTop);
      this.wordlistElement.nativeElement.scrollTop -= 48;
      this.wordImage.next(this.wordlist[this.currentWordIndex]['name']);

    }
  }

  selectMode(index: number) {
    this.selectedModeIndex = index;
  }

  sentenceSplitter() {
    if (this.wordlist.length) {
      return this.wordlist[this.currentWordIndex]['information'].split('\n\n');
    } else {
      return false;
    }
  }

  mnemonicSplitter() {
    if (this.wordlist.length) {
      return this.wordlist[this.currentWordIndex]['mnemonic'].split(/\d\./).slice(1);
    } else {
      return false;
    }
  }

  fetchImage(word) {
    // const word = this.wordlist[this.currentWordIndex]['name'];
    this.http.get(`${APP_URLS.WORD_IMG_URL}${word}`, null,
      { headers: { 'Accept': 'application/json' } }).subscribe((image: any) => {
        this.wordlist[this.currentWordIndex]['imgsrc'] = image.href;
      }, error => {

      });
  }

  setInfoMode(val) {
    this.infomode = val;
  }

  setDefaultImage(val) {
    alert('faield,');
  }

  enterPracticeMode() {
    this.selectMode(0);
    this.router.navigate(['practice', { id: this.wordlistsha, name: this.wordlistname }]);
  }
}
