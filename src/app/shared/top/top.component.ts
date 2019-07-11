import { TopService } from './top.service';

import { Component, OnInit } from '@angular/core';
import { Top } from './top-news.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  topNews:Top[]=[];

  constructor(private topService:TopService) { }

  ngOnInit() {
    this.topService.getTopNews().subscribe(res=>{
      this.topNews = res as Top[];
    })
  }

}
