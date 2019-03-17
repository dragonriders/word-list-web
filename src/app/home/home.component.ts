import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';

import { APP_URLS } from './../constants/urls.endpoints';
import { WordService } from './../services/word.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  wordListCreateFlag: boolean;
  wordList: any[];
  wordListInput: string;
  sampleList: any[];

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute,
    private word: WordService) {
    this.wordListCreateFlag = false;
  }

  ngOnInit() {
    this.word.fetchMarketList().subscribe((sampleList: any) => {
      this.sampleList = sampleList;
      this.word.marketlist = sampleList;
      this.sampleList.unshift({
        name: 'default list',
        sha: '9a304cf0cb4d63718bbf989346ae9b9adf37defa'
      });
    }, (error) => {

    });
  }

  setWordListFlag() {
    this.wordListCreateFlag = !this.wordListCreateFlag;
  }

  createWordList() {
    if (this.wordListInput.trim().length) {
      this.wordList.push({ name: this.wordListInput });
      this.wordListInput = '';
    }
  }

  selectedWordList(wordList) {
    this.router.navigate([wordList.sha]);
  }
}
