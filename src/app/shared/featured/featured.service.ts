import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  constructor(private http:HttpClient) { }

  getFeaturedNews(){
    return this.http.get("http://api.mohamed-sadek.com/News/FeaturedNews/Get")
  }
}
