import { HttpClient } from "@angular/common/http";
import { URLService } from "./url.service";
import { FormsModule, NgForm } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private url: HttpClient) {
    let a = 0;

    this.url
      .post<any>(`http://192.168.8.140:8881/app3/myurl/${a}`, a)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }
}
