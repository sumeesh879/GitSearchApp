import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()
export class GithubService {
    private username = 'sumeesh879';
    private client_id = 'dd06e104472f0ffa90e2';
    private client_secret = '52ca9224c74d99a2fe7badf09ce7e9fe3b4162fb';

    constructor(private _http: Http) {
        console.log('Github Service Init');
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
    }

}
