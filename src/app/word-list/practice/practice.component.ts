import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordService } from '../../services/word.service';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  selectedWordlist;
  wordlist;
  currIndex: number;
  prevIndex: number;
  WordInfoState: boolean;
  totalWordRead: number;
  constructor(private route: ActivatedRoute, private wordservice: WordService) {
    this.WordInfoState = false;
    this.totalWordRead = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(wordData => {
      this.selectedWordlist = wordData;
      console.log(this.selectedWordlist);
    });
    this.wordservice.wordlist(this.selectedWordlist.id).subscribe((res) => {
      this.wordlist = res;
      this.randomWord();

    }, (error) => {
      alert('failed to load worldist');
    });
  }


  showWordInfo() {
    this.WordInfoState = !this.WordInfoState;
  }

  sentenceSplitter() {
    if (this.wordlist.length) {
      return this.wordlist[this.currIndex]['information'].split('\n\n');
    } else {
      return false;
    }
  }

  mnemonicSplitter() {
    if (this.wordlist.length) {
      return this.wordlist[this.currIndex]['mnemonic'].split(/\d\./).slice(1);
    } else {
      return false;
    }
  }

  randomWord() {
    this.prevIndex = this.currIndex;
    this.currIndex = Math.floor((Math.random() * this.wordlist.length) + 1);
    this.totalWordRead++;
  }

  prevWord() {
    this.currIndex = this.prevIndex;
  }
}

