import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
ClientsData:any=[];
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.ClientsData = this.data.GetClient();
    // this.ClientsData.subscribe((data:any)=>{
    //   console.log(data);
    // })

    // this.data.GetClient().subscribe((data:any)=>{
    //   this.ClientsData = data;
    //   console.log(data);
    // })
    
  }

}
