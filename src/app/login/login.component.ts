import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorLogin = false;
  constructor(public afa: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  login(email,password){
    this.afa.auth.signInWithEmailAndPassword(email, password)
    .then(()=>{
      console.log("Victory");
    }).catch((error) => {
      this.errorLogin = true;
    })
  }
}
