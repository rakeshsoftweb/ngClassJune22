import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  frmSignUp:any;
  Roles:any=[];
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.frmSignUp = this.fb.group({
      LoginId:'',
      Password:'',
      Mobile:'',
      Country:'',
      TC:'',
      RoleAssigned:''
    })
    this.Roles=["Admin","Manager","User"]
  }

  onSubmit(){
    console.log(this.frmSignUp.value);
  }

}
