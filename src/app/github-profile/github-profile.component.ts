import { Component, OnInit } from '@angular/core';

import { UserRequestService } from '../user-http/user-request.service';
import { Profile } from '../profile';
import { Repositoryclass } from '../repositoryclass';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  providers: [UserRequestService],
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  profile:Profile;
  arrayRepositoryclass:Repositoryclass[];
  // username:any;

  constructor( private userService: UserRequestService) { }
  getResponse(username) {
    this.userService.userRequest(username);
    this.profile = this.userService.profile;
    this.profile.showRepos = false;

    console.log("Got Profile Response");
    console.log(this.profile);

    this.userService.userRequest(username); ////
    this.arrayRepositoryclass = this.userService.arrayRepositoryclass;

  }
  getRepos() {
  
    this.arrayRepositoryclass = this.userService.arrayRepositoryclass;

    console.log("Got Repos Response");
    console.log(this.arrayRepositoryclass);

  }
  toggleRepos(){
    this.profile.showRepos = !this.profile.showRepos;
    console.log("Toggle Repos");
  }

  ngOnInit() {
  }

}
