import { Component, OnInit } from '@angular/core';

import { Profile } from '../profile';
import { Repositoryclass } from '../repositoryclass';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  // providers: [profileclass],
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  profile:Profile;
  arrayRepositoryclass:Repositoryclass[];
  // username:any;

  constructor() { }
  getResponse(username) {
    // this.userService.userRequest(username);
    // this.user = this.userService.user;
    // this.user.showRepos = false;

    console.log("Got User Response");
    // console.log(this.user);

    // this.userService.repoRequest(username);
    // this.arrayRepo = this.userService.arrayRepo;

  }
  getRepos() {
    // this.userService.repoRequest(username);
    // this.arrayRepo = this.userService.arrayRepo;

    console.log("Got Repos Response");
    // console.log(this.arrayRepo);

  }
  toggleRepos(){
    // this.user.showRepos = !this.user.showRepos;
    console.log("Toggle Repos");
  }

  ngOnInit() {
  }

}
