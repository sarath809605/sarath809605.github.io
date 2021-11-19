import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myportfolio';

  ngOnInit(): void {
    this.fnAutoType();
  }

  fnAutoType() {
    var i = 0;
    var txt = "i there I am Sarath.";
    var speed = 100;
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("idAutoText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
      else {
        var j = txt.length;
        while (j) {
          var curString = document.getElementById("idAutoText").innerHTML;
          curString = curString.slice(0, -1);
          document.getElementById("idAutoText").innerHTML = curString;
          j--;
        }
        i = 0;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  onAboutClick(): any {
    var element = document.getElementById("about");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onWorkClick(): any {
    var element = document.getElementById("work");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onAddressClick(): any {
    var element = document.getElementById("address");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onContactClick(): any {
    var element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
