import { Injectable } from '@angular/core';
import { User } from '../core/user';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const apiUrl = environment.api + "/users/";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  listusers: User[] = [];

  constructor(private http : HttpClient) { }

  // getAllUsers(){
  //   return new Observable( o => {
  //     o.next(this.listusers);
  //     o.error('error when importing users list');
  //     o.complete();
  //   });
  // }

  fetchNbInList(list: any, attribute:string, attributeVal: string){
    return list.filter( (e:any) => e[attribute] == attributeVal).length;
  }

  fetchAllUsers(){
    return this.http.get(apiUrl);
  }

  addUser(body: User){
    return this.http.post(apiUrl, body);
  }

  updateUser(body: User, id : number){
    return this.http.put(apiUrl, body);
  }

  deleteUser(id : number){
    return this.http.delete(apiUrl+id);
  }
}
