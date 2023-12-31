import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  constructor(private userService:UserService,private router:Router, private route:ActivatedRoute){}

  id:number = 0;
  user: User = new User();

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.id !== undefined &&
      this.userService.fetchUserById(this.id).subscribe({
        next: (data) => (this.user = data),
      });
  }
  add(f: NgForm) {
    if (this.getButtonMessage() === 'Add') {
      console.log(f.value);
      console.log(this.user);
      this.user.accountCategory = 'Customer';
      this.userService.addUser(this.user).subscribe({
        next: () => this.router.navigate(['user/listUsers']),
      });
    } else {
      this.userService.updateUser(this.id, this.user).subscribe({
        next: () => this.router.navigate(['user/listUsers']),
      });
    }
  }
getButtonMessage() {
    return this.id !== undefined ? 'Update' : 'Add';
  }
}