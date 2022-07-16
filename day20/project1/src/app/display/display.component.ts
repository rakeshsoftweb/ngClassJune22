import { Component, OnInit } from '@angular/core';
import { Myservice1Service } from '../myservice1.service';
import { Myservice3Service } from '../myservice3.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service1 : Myservice1Service, private Service3 : Myservice3Service) { }

  ngOnInit(): void {
    this.service1.DisplayService1();
    // using abstract class 
    // let service3 = new Myservice3Service();
    // service3.DisplayService3();

    this.Service3.DisplayService3();

  }

}
