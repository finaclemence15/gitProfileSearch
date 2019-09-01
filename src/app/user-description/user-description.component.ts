import { Component, OnInit, Input } from '@angular/core';

import { UserRequestService } from '../user-http/user-request.service';
import { Repositoryclass } from '../repositoryclass';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  providers: [UserRequestService],
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {

  @Input() repositoryclass: Repositoryclass;


  constructor(private userService: UserRequestService) { } ////

  ngOnInit() {
  }

}
