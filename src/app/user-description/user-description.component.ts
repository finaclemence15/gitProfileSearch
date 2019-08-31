import { Component, OnInit, Input } from '@angular/core';
import { Repositoryclass } from '../repositoryclass';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {
    // arrayRepo:Repo[];
    @Input() repositoryclass:Repositoryclass;


  constructor() { }

  ngOnInit() {
  }

}
