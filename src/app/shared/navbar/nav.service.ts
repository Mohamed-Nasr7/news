import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private http:HttpClient) { }

  getCateg(){
    return this.http.get("http://api.mohamed-sadek.com/News/Departments/Get")
  }

}
