import { Component, OnInit } from '@angular/core';

function showMenu(menuItem) {
  menuItem.style.display = 'flex';
  menuItem.style.top = '0';
  // mainMenu2.className += " menuOpenClass";
  // mainMenu2.classList.remove("menuCloseClass");
}

function hideMenu(menuItem) {
  menuItem.style.top = '-100%';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myportfolio';

  ngOnInit(): void {
    this.fnAutoType();

    const mainMenu = document.querySelector('.mainMenu');
    const mainMenu2 = document.getElementById("mainMenuOpen");
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    const homenav = document.querySelector('.homenav');
    const aboutnav = document.querySelector('.aboutnav');
    const workandexperiencenav = document.querySelector('.workandexperiencenav');
    const contactnav = document.querySelector('.contactnav');

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    document.addEventListener("click", function (e) {
        if(e.target == homenav || e.target == aboutnav || e.target == workandexperiencenav || e.target == contactnav){
            // mainMenu.style.top = '-100%';
            // mainMenu2.classList.remove("menuOpenClass");
            // mainMenu2.classList.add("menuCloseClass");
            hideMenu(mainMenu2);
        }

    }, false);

    function show() {
      showMenu(mainMenu2);
        // mainMenu.style.display = 'flex';
        // mainMenu.style.top = '0';
        // mainMenu2.className += " menuOpenClass";
        // mainMenu2.classList.remove("menuCloseClass");
    }
    function close() {
       hideMenu(mainMenu2);
        // mainMenu.style.top = '-100%';
        // mainMenu2.classList.remove("menuOpenClass");
        // mainMenu2.classList.add("menuCloseClass");
    }

    // window.onscroll = function() {myFunction()};

    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    //   if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    //   } else {
    //     navbar.classList.remove("sticky");
    //   }
    // }
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
