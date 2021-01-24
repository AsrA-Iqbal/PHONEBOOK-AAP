import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
loggedIn:boolean=false;
  constructor() { }


  Login() {
    this.loggedIn;
    var username1 =(<HTMLInputElement>document.getElementById('uname')).value;
    var password1 =(<HTMLInputElement>document.getElementById('psw')).value;
    
    // storing input from register-form
      // localStorage.setItem('username',(document.getElementById('uname') as HTMLInputElement).value);
      // localStorage.setItem('password', (document.getElementById('psw') as HTMLInputElement).value);
    
      var storedName = localStorage.getItem('username');
      var storedPw = localStorage.getItem('password');
    
    if(username1 !== storedName || password1 !== storedPw){
        alert('wrong username or pasword');
        this.loggedIn=true;
    }
    else{
      this.loggedIn=false;
      alert(username1+" "+" "+"loged in");
      this.loggedIn=false
      

  }    
}
  ngOnInit() {
    localStorage.setItem('username','root');
    localStorage.setItem('password','rootuser123');

  

    
  }

}
