import { FeaturedService } from './featured.service';
import { Featured } from './featured.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  features: Featured[]=[];

  constructor(private featureService:FeaturedService) { }

  ngOnInit() {
    this.featureService.getFeaturedNews().subscribe(res=>{
      this.features = res as Featured[];
    })
  }

}
