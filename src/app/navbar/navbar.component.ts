import { Component, OnInit , Output, EventEmitter } from '@angular/core';

import { Profile } from '../profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username = "finaclemence15";

  @Output() addUser = new EventEmitter<any>();

  submitUser() {
    this.addUser.emit(this.username);
  }

  constructor() { }

  ngOnInit() {
    this.submitUser();
  }

}
