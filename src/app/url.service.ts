import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class URLService {
  constructor(private http: HttpClient) {}

  urlmethod(i) {
    return this.http.post("http://192.168.8.140.8881/app3/myurl/", i);
  }
}
