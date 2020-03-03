import { FormsModule, NgForm } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "elmeasure";
  firstnumber;
  secondnumber;
  Result;

  submit(form: NgForm) {
    this.firstnumber = form.value.input1;
    this.secondnumber = form.value.input2;

    const first = +this.firstnumber;
    const second = +this.secondnumber;
    const result = first * second;
    console.log(result);
    this.Result = result;
  }
}
