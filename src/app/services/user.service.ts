import { Injectable } from '@angular/core';
import { User } from '../core/user';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const api = environment.api + "/users/";
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

  fetchNbInList(list: any, attribute: string, attributeVal: string) {
    return list.filter((e: any) => e[attribute] === attributeVal).length;
  }

  fetchAllUsers() {
    return this.http.get(api);
  }

  fetchUserById(id: number) {
    return this.http.get<User>(api + id);
  }
  addUser(body: User) {
    return this.http.post(api, body);
  }
  updateUser(id: number, body: User) {
    return this.http.put(api + id, body);
  }
  deleteUser(id: number) {
    return this.http.delete(api + id);
  }
}
