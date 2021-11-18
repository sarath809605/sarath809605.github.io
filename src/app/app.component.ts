import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myportfolio';

  ngOnInit():void{

  }

  onAboutClick(): any{
    var element = document.getElementById("about");
    element.scrollIntoView({behavior: "smooth", block: "start"});
  }
  onWorkClick(): any{
    var element = document.getElementById("work");
    element.scrollIntoView({behavior: "smooth", block: "start"});
  }
  onAddressClick(): any{
    var element = document.getElementById("address");
    element.scrollIntoView({behavior: "smooth", block: "start"});
  }
  onContactClick(): any{
    var element = document.getElementById("contact");
    element.scrollIntoView({behavior: "smooth", block: "start"});
  }
}
