import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from './../skeleton.animation';

@Component({
  selector: 'app-home-skeleton',
  templateUrl: './home.skeleton.component.html',
  styleUrls: ['./home.skeleton.component.scss'],
  animations: [
    trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn())]
})

export class HomeSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
