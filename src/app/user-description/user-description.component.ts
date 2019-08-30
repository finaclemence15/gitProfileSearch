import { Component, OnInit, Input } from '@angular/core';
// import { profile-class } from '../';
// import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {
    // arrayRepo:Repo[];
    @Input() repo:Repo;


  constructor(private userServices:userRequestServices) { }

  ngOnInit() {
  }

}
