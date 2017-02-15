import { Component, NgModule } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: 'github.component.html',
  providers: [ GithubService ]
})
export class GithubComponent  { 

    user: any; //for time being
    repos: any;
    username: string;

    constructor(private _githubServie: GithubService) {

    }

    search() {

        this._githubServie.updateUsername(this.username);

        this._githubServie.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        });

        this._githubServie.getRepos().subscribe(repos => {
            console.log(repos);
            this.repos = repos;
        });

    }

}
