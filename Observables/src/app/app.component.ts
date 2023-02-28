import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Observables';
  activeStatus:any ="now";
  error:any = '';

  ngOnInit(){
    console.log("Inside OnInit");
    new Observable((observer)=>{
      setTimeout(()=>{
        observer.next("1 minute ago")
        observer.error("An error occured")
      },2000);
       setTimeout(()=>{
        observer.next("2 minute ago")
      },4000);
        setTimeout(()=>{
        observer.next("3 minute ago")
        observer.complete()
      },6000);
    }).subscribe((res)=>{
      this.activeStatus = res;
    },(err)=>{
      this.error=err;
    })
  }
}
