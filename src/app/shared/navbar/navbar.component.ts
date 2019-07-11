import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { NavService } from './nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  catgs: Category[]=[];

  constructor(private NavService:NavService) { }

  ngOnInit() {
    this.NavService.getCateg().subscribe(response=>{
      this.catgs = (response as Category[]).filter(val=>{
        return val.ShowInMainMenu == true
      });
    },
    error=>{})

  }

}
