import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Response } from '@angular/http';

import { environment } from '../../environments/environment';
import { Profile } from '../profile';
import { Repositoryclass } from '../repositoryclass';

@Injectable(
  // providedIn: 'root'
)
export class UserRequestService {
  profile: Profile;
  repositoryclass: Repositoryclass;
  arrayRepositoryclass: Repositoryclass[];

  constructor(private http: HttpClient) {
    this.profile = new Profile("", "", "", 0, 0, 0, "");
    this.repositoryclass = new Repositoryclass("", "", "");
  }
  private profileInput = ""; ////

  userRequest(profileInput) {
    this.http.get("https://api.github.com/users/" + profileInput + "?access_token=0b0d8efe9f914b12219e01ecd32aaa4071ef2132").subscribe((response) => {
      const profileData = response;

      this.profile.photoUrl = profileData["avatar_url"];
      this.profile.userProfile = profileData["login"];
      this.profile.bio = profileData["bio"];
      this.profile.numRepos = profileData["public_repos"];
      this.profile.followers = profileData["followers"];
      this.profile.following = profileData["following"];
      this.profile.created = profileData["created_at"];

      return this.profile;
    })


  }   //end userRequest

  RepositoryclassRequest(profileInput) {

    this.http.get("https://api.github.com/users/" + profileInput + "/repos?access_token=0b0d8efe9f914b12219e01ecd32aaa4071ef2132").subscribe((response) => {
      const reposData = response;

      this.arrayRepositoryclass = [];

      for (let index = 0; index < reposData["length"]; index++) {
        this.repositoryclass = new Repositoryclass("", "", "");
        this.repositoryclass.appName = reposData[index]["name"];
        this.repositoryclass.repoLink = reposData[index]["html_url"];
        this.repositoryclass.description = reposData[index]["description"];
        this.arrayRepositoryclass.push(this.repositoryclass);
      }
      return this.arrayRepositoryclass;
    })


  } //end repoRequest

} 