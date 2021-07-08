import { Component, OnInit } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { ServiceService } from './Api/service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  usersArray:any =[];
  title = 'Content';
 
  ngOnInit(): void{
   this.getAllRandomUsers();
    
  }


  constructor(public ApiService: ServiceService ) { }
  
  getAllRandomUsers(){
    return this.ApiService.getAllRandomUsers().subscribe((JsonApi:any) =>{
    this.usersArray = JsonApi;

  })

}

}
