import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategDetails } from './categ-details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categs:CategDetails[]=[];

  constructor(private activeRoute:ActivatedRoute,
    private http:HttpClient) { }

  ngOnInit() {
    
    let id:number = 0;
    this.activeRoute.paramMap.subscribe(val=>{
      id = +val.get("id");
      this.getCategory(id);
    })
  }



  getCategory(id:number){
    this.http.get(`http://api.mohamed-sadek.com/News/Department/${id}`).subscribe(resp=>{
      this.categs = resp as CategDetails[];
    })
  }

}
