import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from './details.model';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  newsItem:Details = new Details();

  constructor(private activeRoute:ActivatedRoute,
    private http:HttpClient) { }
 
  ngOnInit() {
    let id:number=0;
    this.activeRoute.paramMap.subscribe(par=>{
      id = +par.get("id");
      this.getDetails(id);
    })
  }

  getDetails(id:number){
    this.http.get(`http://api.mohamed-sadek.com/News/item/${id}`).subscribe(resp=>{
    this.newsItem = resp as Details;
    });
  }
}
