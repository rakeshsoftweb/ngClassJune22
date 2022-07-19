import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  frmContact: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmContact = this.formBuilder.group(
      {
        fullname: '',
        skills: this.formBuilder.array([])
      }
    )
  }
  get skills(): FormArray {
    return this.frmContact.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.formBuilder.group(
      {
        skill: '',
        exp: ''
      }
    )
  }
  addSkills()
  {
    this.skills.push(this.newSkill());
  }
  removeSkill(i:number)
  {
    this.skills.removeAt(i);
  }
  onSubmit()
  {
    console.log(this.frmContact.value)
  }

}
