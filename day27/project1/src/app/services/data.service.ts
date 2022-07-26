import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  // display1 testing below method
  strURL = "http://localhost:3000/clients";
  TestObservable(){
    const observ = Observable.create((observer:any)=>{
      observer.next("Hi Angular Observable !!");
      observer.next("this is next value 2");
      observer.next("thanks for using Observable!!");
      observer.complete();
      observer.next("We are sending value after complete method");
    })
    observ.subscribe((data:any)=>{
      console.log(data);
    })
  }

  GetClient():Observable<any[]>
  {
    return this.http.get<any[]>(this.strURL).pipe(
      tap(data=>{return data}),
      catchError((err:any)=>{
        return [err];
      })
    )
  }  
}
