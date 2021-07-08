import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  get(apiUrl: any) {
    throw new Error('Method not implemented.');
  }
  usersArray:any =[];

  constructor(private httpClient: HttpClient) { }
  apiUrl: string  = 'https:jsonplaceholder.typicode.com/users';

  getAllRandomUsers(){
    return this.httpClient.get(this.apiUrl)
  }

 

}

