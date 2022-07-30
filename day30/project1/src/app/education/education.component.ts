import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  frmEducation: any;
  EducationData: any = [];
  StudentsData: any = [];
  allCourse: any = [];
  dotnet:boolean=false;
  angular:boolean=false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmEducation = this.fb.group({
      studname: '',
      mobile: '',
      gender: '',
      education: '',
      course: []
    })
    this.EducationData = ["BA", "Bsc", "MCA"];
  }

  onSubmit() {
    console.log(this.frmEducation.value);
    this.StudentsData.push(this.frmEducation.value);
    this.dotnet=false;
    this.angular= false;
    this.allCourse=[];
  }

  onChangeCourse(event: any) {
    // const { name, checked } = event.target;
    // if(checked && name ==='dotnet')
    // {
    //   this.frmEducation.controls['course'].setValue('Dot Net');
    // } else if (checked && name==='angular') {
    //   this.frmEducation.controls['course'].setValue('Angular');
    // } else {
    //   this.frmEducation.controls['course'].setValue('');
    // }    
    event.preventDefault();
    const { name, checked } = event.target;
    
    if (checked && name === 'dotnet') {
      this.allCourse.push('Dot Net');
      this.dotnet=true;
    } else if (checked && name === 'angular') {
      this.allCourse.push('Angular');
      this.angular = true;
    } else {
      this.allCourse=[];
    }
    this.frmEducation.controls['course'].setValue(this.allCourse);
  }
}
