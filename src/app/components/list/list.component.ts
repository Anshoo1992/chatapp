import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public userSrvice: UserService) { }

  ngOnInit() {
  }
  create() {
    const body = {
      email: 'anshoo.pandey@non.com',
      phone: '917042650718',
      fname: 'Anshoo',
      lname: 'Pandey',
      is_active: true,
      is_blocked: false,
      password: 'anshoo123'

    };

    return this.userSrvice.createUser(body)
      .subscribe(function (data) {
        console.log(data);
      }, (err) => {
        console.log(err);
      });
  }

  getUser() {
    const params = { param: 'id', value: '5cb8239c392ac51994b9eb99' };
    return this.userSrvice.getUser(params).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  updateUser() {
    const body = { id: '5cb8239c392ac51994b9eb99', updateData: { lname: 'Mishra', password: 'mishra173' } };
    return this.userSrvice.updateUser(body).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  deleteUser() {
    const body = {id: '5cb89eced39cea4f20ca9c60'};
    return this.userSrvice.deleteUser(body).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
  sendEmailVerification() {
    const body = {};
    this.userSrvice.sendEmailVerification(body).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
