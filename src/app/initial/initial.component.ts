import { CategDetails } from './../home/categ-details.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  categs:CategDetails[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(`http://api.mohamed-sadek.com/News/Department/61`).subscribe(resp=>{
      this.categs = resp as CategDetails[];
    });

  }

}