import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  membersUrl = "https://mdbackenapp.azurewebsites.net/members?offset=0&limit=10&summary=true&orderby=memberName&order=asc&q=memberStatus==Active"

  constructor(private httpClient: HttpClient) { }

  getMembers(){
    return this.httpClient.get(this.membersUrl);
  }

}
