import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';

import { APP_URLS } from './../constants/urls.endpoints';

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

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {
    this.wordListCreateFlag = false;
  }

  ngOnInit() {
    this.http.get(APP_URLS.MARKETPLACE_URL).subscribe((sampleList: any) => {
      this.sampleList = sampleList;
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
    alert(JSON.stringify(wordList));
    this.router.navigate([wordList.sha]);
  }
}
