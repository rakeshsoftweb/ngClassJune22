import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin:any;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.frmLogin = this.fb.group({
      userid:'',
      password:''
    })
  }

  onSubmit()
  {
    console.log("form Data", this.frmLogin.value);
    localStorage.setItem("lsuserid",this.frmLogin.value.userid);
    sessionStorage.setItem("ssuserid",this.frmLogin.value.userid);
  }

}
