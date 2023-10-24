import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit{
  searchtext: string = '';
  listusers : User[] = [];

  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    this.userService.fetchAllUsers().subscribe( {
      next: (data) => this.listusers = data as User[],
      error: (e) => console.log(e)
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe( {
      next: () => (this.listusers = this.listusers.filter((u) => u.idCustomer != id)),
      error: (e) =>console.log(e)
    });
  }

  searchUser() {
    this.searchtext != '' ? this.listusers = this.listusers.filter((u)=>u.accountCategory == this.searchtext) : this.listusers = this.listusers;
  }

  calculer(){
    console.log(this.userService.fetchNbInList(this.listusers, "accountCategory","Customer"));
  }
}
